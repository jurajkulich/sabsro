// Machine-park facts that the content files don't carry as fields.
// Only what the content already states: maker names and the country codes
// written in the machine titles (MAS/CZ, Intos/CZ, Trens SK, Bianco/IT).
// `specs` holds only figures the machine content or the client states. Unknowns stay
// undefined and are simply not rendered. Never guess them.
// Exception: the entries marked PROVISIONAL / "catalog" below are placeholder catalog values
// pending the client's real data.
//
// To add the client's figures, set them per machine by key, e.g.
//   mcv1016: { ..., specs: { travelX: '1016 mm', travelY: '610 mm', travelZ: '720 mm', control: 'Heidenhain' } }
// The spec sheet renders them in `specOrder`, labelled from `specLabels`.

export type MachineGroup = 'cnc' | 'manual' | 'saw'

/** Size of the whole park as the client states it (2026-11-22). The site lists only a selection,
 *  so park-size copy uses these figures, not the number of content entries. */
export const parkSize = { cnc: 11, conventional: 10, total: 25 } as const

/** The figures an engineer checks first, in the order the spec sheet lists them. */
export const specLabels = {
  axes: { sk: 'Počet osí', en: 'Axes' },
  travelX: { sk: 'Pojazd X', en: 'Travel X' },
  travelY: { sk: 'Pojazd Y', en: 'Travel Y' },
  travelZ: { sk: 'Pojazd Z', en: 'Travel Z' },
  table: { sk: 'Upínacia plocha stola', en: 'Table size' },
  tableLoad: { sk: 'Nosnosť stola', en: 'Table load' },
  swing: { sk: 'Obežný priemer nad lôžkom', en: 'Swing over bed' },
  swingTable: { sk: 'Obežný priemer nad stolom', en: 'Swing over table' },
  centres: { sk: 'Vzdialenosť hrotov', en: 'Distance between centres' },
  grindDiameter: { sk: 'Max. vonkajší priemer brúsenia', en: 'Max. external grinding diameter' },
  wheel: { sk: 'Brúsny kotúč', en: 'Grinding wheel' },
  turningLength: { sk: 'Dĺžka sústruženia', en: 'Turning length' },
  barCapacity: { sk: 'Priechod tyče', en: 'Bar capacity' },
  spindleBore: { sk: 'Vŕtanie vretena', en: 'Spindle bore' },
  partWeight: { sk: 'Hmotnosť dielu do', en: 'Part weight up to' },
  cutCapacity: { sk: 'Rezný rozsah', en: 'Cutting capacity' },
  spindleSpeed: { sk: 'Otáčky vretena', en: 'Spindle speed' },
  control: { sk: 'Riadiaci systém', en: 'Control' },
} as const

export type SpecKey = keyof typeof specLabels
export const specOrder = Object.keys(specLabels) as SpecKey[]

export const machineFacts: Record<
  string,
  {
    group: MachineGroup
    maker?: string
    country?: { sk: string; en: string }
    specs?: Partial<Record<SpecKey, string>>
  }
> = {
  // PROVISIONAL (2026-11-21): figures marked "catalog" are typical values for the base model,
  // taken from manufacturer catalogs and dealer listings, NOT from our own machines. Variants
  // differ (travel lengths, control), so replace them with nameplate/manual data when available.
  dnm6700: {
    group: 'cnc',
    maker: 'Doosan',
    // catalog
    specs: {
      axes: '4',
      travelX: '1300 mm',
      travelY: '670 mm',
      travelZ: '625 mm',
      table: '1500 × 670 mm',
      tableLoad: '1300 kg',
      spindleSpeed: '12 000 min⁻¹',
    },
  },
  mcv1016: {
    group: 'cnc',
    maker: 'Kovosvit MAS',
    country: { sk: 'Česko', en: 'Czechia' },
    // catalog
    specs: { travelX: '1016 mm', travelY: '610 mm', travelZ: '710 mm', table: '1300 × 600 mm', tableLoad: '700 kg' },
  },
  mcv800: {
    group: 'cnc',
    maker: 'Kovosvit MAS',
    country: { sk: 'Česko', en: 'Czechia' },
    // catalog
    specs: {
      travelX: '800 mm',
      travelY: '500 mm',
      travelZ: '550 mm',
      table: '1000 × 500 mm',
      tableLoad: '600 kg',
      spindleSpeed: '12 000 min⁻¹',
    },
  },
  fng40cnc: {
    group: 'cnc',
    maker: 'Intos',
    country: { sk: 'Česko', en: 'Czechia' },
    // catalog
    specs: { travelX: '600 mm', travelY: '400 mm', travelZ: '400 mm', table: '800 × 400 mm' },
  },
  sbl300: {
    group: 'cnc',
    maker: 'Trens',
    country: { sk: 'Slovensko', en: 'Slovakia' },
    // catalog
    specs: { swing: '530 mm', turningLength: '500 mm' },
  },
  se520: {
    group: 'cnc',
    maker: 'Trens',
    country: { sk: 'Slovensko', en: 'Slovakia' },
    // catalog (turning length is 1000 or 1500 mm depending on variant)
    specs: { swing: '520 mm', turningLength: '1000 mm', spindleBore: '105 mm' },
  },
  // No usable figures found yet: stays "on request".
  sbx500: { group: 'cnc', maker: 'Trens', country: { sk: 'Slovensko', en: 'Slovakia' } },
  eastar300: { group: 'cnc', maker: 'Eastar' },
  gu32x150nc: {
    group: 'cnc',
    maker: 'Palmary',
    country: { sk: 'Taiwan', en: 'Taiwan' },
    // catalog: official Palmary GU32x60NC/100NC/150NC/200NC spec table (palmary.com), 150NC column.
    // The plate image is the manufacturer's GU32x100NC photo (same series, shorter bed).
    specs: {
      swingTable: 'Ø320 mm',
      centres: '1500 mm',
      grindDiameter: 'Ø300 mm',
      partWeight: '150 kg',
      wheel: 'Ø405 × 50 mm, 33 m/s',
      control: 'NC',
    },
  },
  sn50: {
    group: 'manual',
    maker: 'Trens',
    country: { sk: 'Slovensko', en: 'Slovakia' },
    // catalog (distance between centres 1000–2000 mm depending on variant)
    specs: { swing: '500 mm', turningLength: '1000 mm', spindleBore: '52 mm' },
  },
  sn500: {
    group: 'manual',
    maker: 'Trens',
    country: { sk: 'Slovensko', en: 'Slovakia' },
    // spindleBore + partWeight from our content; swing is catalog
    specs: { swing: '505 mm', spindleBore: '105 mm', partWeight: '1000 kg' },
  },
  sv18: {
    group: 'manual',
    // catalog (TOS SV18 RA, 1000 mm between centres)
    specs: { swing: '380 mm', turningLength: '1000 mm', spindleBore: '41 mm' },
  },
  // No usable figures found yet (catalog sources conflict on capacity): stays "on request".
  bianco370: { group: 'saw', maker: 'Bianco', country: { sk: 'Taliansko', en: 'Italy' } },
}

/** Park order: CNC centres, lathes, conventional, cutting. */
export const machineOrder = Object.keys(machineFacts)

export const groupLabels = {
  sk: { cnc: 'CNC', manual: 'Konvenčné', saw: 'Rezanie' },
  en: { cnc: 'CNC', manual: 'Conventional', saw: 'Cutting' },
} as const

export const slugOf = (id: string) => id.split('/').pop() ?? id

export const plateLabel = (locale: 'sk' | 'en', n: number) =>
  `${locale === 'sk' ? 'FOTO' : 'PHOTO'} ${String(n).padStart(2, '0')}`

/** The maker has its own column and row, so the type drops the "from the manufacturer …" tail. */
export const typeOnly = (title: string) =>
  title
    .replace(/\s+(?:from the(?: Slovak)? manufacturer|by|od(?: slovenského)? výrobcu)\s+.*$/i, '')
    .trim()

/** "01–04" → the slug of the first machine in that range, for deep links into the index. */
export const firstSlugOf = (range: string) => machineOrder[parseInt(range, 10) - 1]

