// The hero plate's NC program: a G83 peck-drilling cycle on a row of four blind holes.
// One timeline drives both the server-rendered still frame and the live animation,
// so the drawing never jumps when the script takes over.

/** Drawing units per millimetre. */
export const SCALE = 4
/** Workpiece in drawing units: X0 Z0 sits on its top-left corner. */
export const PART = { x: 120, y: 210, w: 400, h: 90 }
/** Drill Ø8.5 with a 118° point. */
export const DRILL_R = 17
export const CONE = DRILL_R / Math.tan((59 * Math.PI) / 180)
export const HOLES_X = [20, 40, 60, 80]
export const DEPTH = 15
const PECK = 5
const R_PLANE = 2
const CLEAR = 10
const HOME = { x: 50, z: 20 }

export const SPEED = 2400
export const FEED = 180
const RAPID = 15000

export const toX = (mm: number) => PART.x + mm * SCALE
export const toY = (mm: number) => PART.y - mm * SCALE

type Kind = 'dwell' | 'rapid' | 'feed' | 'swap'

interface Segment {
  kind: Kind
  t0: number
  dur: number
  from: { x: number; z: number }
  to: { x: number; z: number }
  block: string
  spindle: boolean
  hole: number
  /** Depth (mm) reached in each hole when this segment starts. */
  depths: number[]
}

export interface CycleState {
  x: number
  z: number
  depths: number[]
  spindle: boolean
  cutting: boolean
  feed: number
  block: string
  /** 0–1 while a fresh part wipes in over the drilled one. */
  swap: number
}

const fmtX = (n: number) => `X${n}.`

const build = () => {
  const segs: Segment[] = []
  let t = 0
  let pos = { ...HOME }
  const depths = HOLES_X.map(() => 0)
  let poster = 0

  const push = (kind: Kind, dur: number, to: { x: number; z: number }, block: string, spindle: boolean, hole = -1) => {
    segs.push({ kind, t0: t, dur, from: pos, to, block, spindle, hole, depths: [...depths] })
    if (kind === 'feed' && hole >= 0) depths[hole] = Math.max(depths[hole], -to.z)
    t += dur
    pos = to
  }
  // Rapids take time in proportion to the distance, with a floor so short hops still read.
  const rapidDur = (to: { x: number; z: number }) => Math.max(0.16, Math.hypot(to.x - pos.x, to.z - pos.z) / 48)

  push('dwell', 0.5, pos, 'N010 G90 G54 S2400 M03', true)
  const start = { x: HOLES_X[0], z: CLEAR }
  push('rapid', rapidDur(start), start, 'N020 G00 X20. Z10. M08', true)

  HOLES_X.forEach((hx, i) => {
    const block = i === 0 ? `N030 G98 G83 ${fmtX(hx)} Z-15. R2. Q5. F180` : `N0${30 + i * 10} ${fmtX(hx)}`
    if (pos.x !== hx) push('rapid', rapidDur({ x: hx, z: CLEAR }), { x: hx, z: CLEAR }, block, true, i)
    push('rapid', rapidDur({ x: hx, z: R_PLANE }), { x: hx, z: R_PLANE }, block, true, i)
    for (let d = PECK; d <= DEPTH; d += PECK) {
      const target = { x: hx, z: -d }
      if (i === 1 && d === PECK * 2) poster = t + 0.45
      push('feed', ((pos.z - target.z) / PECK) * 0.85, target, block, true, i)
      if (d < DEPTH) {
        push('rapid', rapidDur({ x: hx, z: R_PLANE }), { x: hx, z: R_PLANE }, block, true, i)
        push('rapid', rapidDur({ x: hx, z: -d + 0.5 }), { x: hx, z: -d + 0.5 }, block, true, i)
      }
    }
    push('rapid', rapidDur({ x: hx, z: CLEAR }), { x: hx, z: CLEAR }, block, true, i)
  })

  push('rapid', rapidDur(HOME), { ...HOME }, 'N070 G80 G00 Z20. M09', true)
  push('dwell', 0.45, pos, 'N080 M05', false)
  push('swap', 0.9, pos, 'N090 M30', false)
  // The fresh part is now in the vise: every hole starts again from nothing.
  depths.fill(0)
  push('dwell', 0.35, pos, 'N090 M30', false)

  return { segs, total: t, poster }
}

const { segs, total, poster } = build()

export const CYCLE_LENGTH = total
/** The still frame: second peck of hole 2, the first hole finished. */
export const POSTER_TIME = poster

const easeInOut = (p: number) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2)

export function stateAt(time: number): CycleState {
  const t = ((time % total) + total) % total
  const seg = segs.find((s) => t < s.t0 + s.dur) ?? segs[segs.length - 1]
  const p = Math.min(1, Math.max(0, (t - seg.t0) / seg.dur))
  const k = seg.kind === 'rapid' ? easeInOut(p) : seg.kind === 'feed' ? p : 0
  const x = seg.from.x + (seg.to.x - seg.from.x) * k
  const z = seg.from.z + (seg.to.z - seg.from.z) * k
  const depths = [...seg.depths]
  const cutting = seg.kind === 'feed' && z < 0
  if (cutting) depths[seg.hole] = Math.max(depths[seg.hole], -z)
  return {
    x,
    z,
    depths,
    spindle: seg.spindle,
    cutting,
    feed: seg.kind === 'feed' ? FEED : seg.kind === 'rapid' ? RAPID : 0,
    block: seg.block,
    swap: seg.kind === 'swap' ? easeInOut(p) : 0,
  }
}

/** Outline of a hole drilled to `depth` mm: open at the top, closed by the 118° point. */
export function holePath(i: number, depth: number) {
  if (depth <= 0) return ''
  const cx = toX(HOLES_X[i])
  const tip = PART.y + depth * SCALE
  if (depth * SCALE <= CONE) {
    const w = ((depth * SCALE) / CONE) * DRILL_R
    return `M${cx - w} ${PART.y}L${cx} ${tip}L${cx + w} ${PART.y}`
  }
  const wall = tip - CONE
  return `M${cx - DRILL_R} ${PART.y}V${wall}L${cx} ${tip}L${cx + DRILL_R} ${wall}V${PART.y}`
}

/** The same hole as a closed area, carried 6 units above the face so the masked top edge breaks cleanly. */
export function holeArea(i: number, depth: number) {
  const d = holePath(i, depth)
  if (!d) return ''
  const cx = toX(HOLES_X[i])
  const w = depth * SCALE <= CONE ? ((depth * SCALE) / CONE) * DRILL_R : DRILL_R
  return `${d}V${PART.y - 6}H${cx - w}Z`
}

export const pad = (n: number, int: number, dec: number) => {
  const sign = n < -0.0005 ? '−' : ''
  const [a, b] = Math.abs(n).toFixed(dec).split('.')
  return `${sign}${a.padStart(int, '0')}${b ? `.${b}` : ''}`
}
