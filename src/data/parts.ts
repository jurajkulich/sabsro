// Example parts: real photos of work from the shop, shown on /parts (and the first four on the home page).
// A showcase, not a catalogue of what the shop can make; the page copy says so.
//
// DRAFT (2026-11-28): every `material` and `process` below was read off the photo, not supplied by the
// owners. They are pending the owners' check; flip `verified` to true per entry once confirmed or corrected.
// The part names of the four older photos (carousel_1/2/4/5) were client-confirmed on 2026-11-16.
//
// File names are descriptive on purpose: Astro keeps the base name in the built image URL, which
// image search reads alongside the alt text and caption.

import type { ImageMetadata } from 'astro'
import flangedHubs from '../assets/carousel/prirubove-naboje-cnc-sustruzenie.jpg'
import flangedBodies from '../assets/carousel/telesa-s-prirubou-sustruzenie-vrtanie.jpg'
import keyedBushings from '../assets/carousel/puzdra-s-drazkou-pre-pero.jpg'
import groundShafts from '../assets/carousel/brusene-hriadele.jpg'
import rails from '../assets/carousel/hlinikove-listy-cnc-frezovanie.jpg'
import oneOffs from '../assets/carousel/diely-na-zakazku-sustruzenie-frezovanie.jpg'
import plastics from '../assets/carousel/diely-z-technickych-plastov.jpg'
import sprockets from '../assets/carousel/retazove-kolesa.jpg'
import pulleys from '../assets/carousel/remenice-a-ozubene-koleso.jpg'
import pinSleeves from '../assets/carousel/cap-puzdra-a-podlozka-cierne.jpg'
import collar from '../assets/carousel/delena-upinacia-objimka.jpg'
import hub from '../assets/carousel/naboj-s-drazkou-pre-pero.jpg'
import shaftsOld from '../assets/carousel/carousel_1.jpg'
import sprocketsOld from '../assets/carousel/carousel_2.jpg'
import ringOld from '../assets/carousel/carousel_4.jpg'
import bushingsOld from '../assets/carousel/carousel_5.jpg'

type Localized = { sk: string; en: string }

export type Part = {
  src: ImageMetadata
  name: Localized
  material: Localized
  process: Localized
  /** Crop anchor for the 4:5 plate when the subject is off-centre (sharp: 'top', 'left', 'attention', …). */
  position?: string
  verified: boolean
}

export const parts: Part[] = [
  {
    src: flangedHubs,
    name: { sk: 'Prírubové náboje', en: 'Flanged hubs' },
    material: { sk: 'Nehrdzavejúca oceľ', en: 'Stainless steel' },
    process: {
      sk: 'CNC sústruženie, vŕtanie na rozstupovej kružnici, frézovanie plôšok',
      en: 'CNC turning, drilling on a bolt circle, milled flats',
    },
    verified: false,
  },
  {
    src: flangedBodies,
    name: { sk: 'Telesá s prírubou a bočnými otvormi', en: 'Flanged bodies with cross holes' },
    material: { sk: 'Nehrdzavejúca oceľ', en: 'Stainless steel' },
    process: { sk: 'CNC sústruženie, vŕtanie a rezanie závitov', en: 'CNC turning, drilling and tapping' },
    verified: false,
  },
  {
    src: keyedBushings,
    name: { sk: 'Puzdrá s drážkou pre pero', en: 'Bushings with keyways' },
    material: { sk: 'Oceľ', en: 'Steel' },
    process: { sk: 'Sústruženie, obrážanie drážky', en: 'Turning, keyway slotting' },
    verified: false,
  },
  {
    src: groundShafts,
    name: { sk: 'Brúsené hriadele', en: 'Ground shafts' },
    material: { sk: 'Oceľ', en: 'Steel' },
    process: { sk: 'CNC sústruženie, brúsenie do kruhu', en: 'CNC turning, cylindrical grinding' },
    verified: false,
  },
  {
    src: rails,
    name: { sk: 'Montážne lišty s výrezmi', en: 'Mounting rails with cut-outs' },
    material: { sk: 'Hliník', en: 'Aluminium' },
    process: { sk: 'CNC frézovanie', en: 'CNC milling' },
    verified: false,
  },
  {
    src: oneOffs,
    name: { sk: 'Kusové diely: puzdrá, krúžky, dýza', en: 'One-off parts: housings, rings, a nozzle' },
    material: { sk: 'Oceľ, nehrdzavejúca oceľ', en: 'Steel, stainless steel' },
    process: { sk: 'CNC sústruženie a frézovanie', en: 'CNC turning and milling' },
    verified: false,
  },
  {
    src: plastics,
    name: { sk: 'Diely z technických plastov', en: 'Technical plastic parts' },
    material: { sk: 'Technické plasty (PE, POM, PA)', en: 'Technical plastics (PE, POM, PA)' },
    process: { sk: 'CNC sústruženie a frézovanie', en: 'CNC turning and milling' },
    verified: false,
  },
  {
    src: sprockets,
    name: { sk: 'Reťazové kolesá', en: 'Chain sprockets' },
    material: { sk: 'Oceľ', en: 'Steel' },
    process: {
      sk: 'Sústruženie, frézovanie ozubenia, obrážanie drážky',
      en: 'Turning, tooth milling, keyway slotting',
    },
    verified: false,
  },
  {
    src: pulleys,
    name: { sk: 'Remenice a ozubené koleso', en: 'Pulleys and a spur gear' },
    material: { sk: 'Oceľ, hliník', en: 'Steel, aluminium' },
    process: { sk: 'Sústruženie, obrážanie drážky', en: 'Turning, keyway slotting' },
    verified: false,
  },
  {
    src: pinSleeves,
    name: { sk: 'Čap, drážkované puzdrá a podložka', en: 'Pin, slotted sleeves and a washer' },
    material: { sk: 'Oceľ, čiernená', en: 'Steel, black oxide' },
    process: { sk: 'Sústruženie, frézovanie drážok, vŕtanie', en: 'Turning, slot milling, drilling' },
    verified: false,
  },
  {
    src: collar,
    name: { sk: 'Delená upínacia objímka', en: 'Split clamping collar' },
    material: { sk: 'Nehrdzavejúca oceľ', en: 'Stainless steel' },
    process: {
      sk: 'Sústruženie, frézovanie, vŕtanie a rezanie závitov',
      en: 'Turning, milling, drilling and tapping',
    },
    verified: false,
  },
  {
    src: hub,
    name: { sk: 'Náboj s drážkou pre pero', en: 'Hub with keyway' },
    material: { sk: 'Oceľ', en: 'Steel' },
    process: { sk: 'Sústruženie, obrážanie drážky', en: 'Turning, keyway slotting' },
    verified: false,
  },
  {
    src: shaftsOld,
    name: { sk: 'Sústružené a frézované hriadele', en: 'Turned and milled shafts' },
    material: { sk: 'Oceľ', en: 'Steel' },
    process: { sk: 'CNC sústruženie, frézovanie', en: 'CNC turning, milling' },
    verified: false,
  },
  {
    src: sprocketsOld,
    name: { sk: 'Reťazové kolesá s drážkou pre pero', en: 'Sprockets with keyways' },
    material: { sk: 'Oceľ', en: 'Steel' },
    process: { sk: 'Frézovanie ozubenia, obrážanie drážky', en: 'Tooth milling, keyway slotting' },
    verified: false,
  },
  {
    src: ringOld,
    name: { sk: 'Drážkovaný prstenec', en: 'Slotted ring' },
    material: { sk: 'Hliník', en: 'Aluminium' },
    process: { sk: 'CNC sústruženie, frézovanie drážok', en: 'CNC turning, slot milling' },
    verified: false,
  },
  {
    src: bushingsOld,
    name: { sk: 'Sústružené puzdrá, malá séria', en: 'Turned bushings, small series' },
    material: { sk: 'Nehrdzavejúca oceľ', en: 'Stainless steel' },
    process: { sk: 'CNC sústruženie', en: 'CNC turning' },
    verified: false,
  },
]
