---
name: Švehla a Blaško
description: A machining shop's corporate identity manual set as a website; numbered sheets on one visible 12-column grid, ink on white, one logo red.
colors:
  logo-red: "#e30016"
  ink: "#1b1918"
  paper: "#ffffff"
  stone: "#d9d6d0"
  mid-grey: "#5f5a55"
typography:
  display:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 0.8rem + 5.2vw, 5.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  page-title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.8vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  statement:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.2rem + 3vw, 4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2vw, 3rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1rem + 0.8vw, 1.625rem)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 112"
  lead:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 650
    letterSpacing: "0.08em"
  figure:
    fontFamily: "Archivo Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.3vw, 2.25rem)"
    fontWeight: 700
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 2.2vw, 32px)"
  sheet-head: "clamp(30px, 5vw, 78px)"
  sheet-end: "clamp(40px, 6vw, 88px)"
  frame-max: "1440px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
    height: "52px"
  button-ink-hover:
    backgroundColor: "{colors.logo-red}"
    textColor: "{colors.paper}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
    height: "52px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
    height: "52px"
  button-white-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  intake-cell-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "20px {spacing.gutter}"
    height: "112px"
  intake-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px {spacing.gutter}"
    height: "112px"
  intake-cell-hover:
    backgroundColor: "{colors.logo-red}"
    textColor: "{colors.paper}"
  nav-phone:
    backgroundColor: "{colors.logo-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    height: "76px"
  nav-phone-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  segment-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    height: "44px"
  segment-hover:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
  red-field:
    backgroundColor: "{colors.logo-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
---

# Design System: Švehla a Blaško

## Overview

**Creative North Star: "The Identity Manual"**

The site is the firm's own 1970s-style corporate identity manual: every section is a numbered sheet that opens on a heavy ink rule, with the twelve columns of the page grid drawn as ticks hanging from that rule. White stock, ink type, and the logo red at full strength owning whole fields. Order is the message: an orderly page reads as an orderly shop.

Density is that of a reference document, not a brochure. Facts are set in registers (label left, value right, hairline under each row), machines are an index of numbered rows, the process is a sequence of numbered operations. Photography is shown in natural colour and numbered like manual plates. There are no cards, no shadows, no blur, no rounded corners; structure comes only from grid modules and rules. The previous cream, glow-and-frosted-glass system was discarded entirely and nothing from it carries over.

**Key Characteristics:**
- One logo red at full strength, owning at most one closing field per page (people band, request band) and marking action; never tinted, never a gradient. In the hero, red owns only the contained facts module; the headline field is paper and ink (client direction, 2026-11-21).
- Sheets open on a 2px ink rule with the visible 12-column tick line and a folio ("List 02" / "Sheet 02") on the rule at the right.
- One family, Archivo Variable, with the wide cut for display and tabular figures for every number.
- Registers, indexes and numbered operations instead of cards.
- Natural-colour photography captioned "FOTO 01" / "PHOTO 01".
- One load motion (the tick-line wipe across the headline field) and one scroll procession (the stepped red track over the operations).

## Colors

Ink on white with one red; the red is the logo's own and is used at full strength or not at all.

### Primary
- **Logo Red** (logo-red): owns whole fields only where a page closes (the people band, the machine request band), the hero's facts module, and the mobile and desktop phone block and marks action (intake-cell hover, ink-button hover, nav current/hover underline, link hover underline, focus ring, text selection). Numbering (nav numbers, machine index numbers, service numbers, operation numbers) is set in ink, so red on a white sheet always means "you can act here". On red, all type and rules are white.

### Neutral
- **Ink** (ink): all text, the 2px sheet rules and 1px hairlines, the primary ink action cell and ink button, active segment in filters and language picker, the photo caption bar.
- **Paper** (paper): the page stock and all type set on red or ink.
- **Stone** (stone): the default border color, quiet secondary rules (mobile menu dividers), and the hover fill of segmented controls.
- **Mid Grey** (mid-grey): secondary text only: notes under the intake, operation notes, spec-sheet keys, captions, index column heads, machine types.

### Named Rules
**The Full-Strength Rule.** Red appears at 100% or not at all. No tints, no opacity, no gradients, no red-on-red tones. A red area is a whole field or a whole action, never a wash.

**The Red Means Owned-Or-Action Rule.** Red either owns an entire region of the grid or marks something the buyer can act on. The manual's numbering is ink. Red is never decoration on an otherwise neutral block.

## Typography

**Display Font:** Archivo Variable, wide cut (with ui-sans-serif, system-ui fallback)
**Body Font:** Archivo Variable, normal width (same family)

**Character:** One grotesk family across the whole system, self-hosted with its width axis. Width carries the hierarchy: the widest, heaviest cut for display, progressively narrower for headlines and titles, normal width for reading text.

### Hierarchy
Every size is a token in `src/styles/global.css` (`--text-*`); components never set a literal size.
- **Display** (`--text-display`, 800, wdth 125, up to 5.5rem, line-height 0.95): the hero statement only. In the hero it is also capped so the longest line fits the headline field on one line (per-locale `--title-em`).
- **Page title** (`--text-page-title`, same cut, up to 4.25rem, sized for a two-line sentence): page titles on machines, about and contact. They are factual statements, not section names ("12 machines in our hall.", "Since 1990 in Nové Mesto nad Váhom.", "Send your drawing to Juraj Nemček."); the nav keeps the short names.
- **Statement** (`--text-statement`, same cut, 2.25rem to 4rem): the heading of a red band.
- **Headline** (750, wdth 118, clamp 2rem to 3rem, line-height 1.02, balanced wrapping): sheet headings.
- **Title** (`--text-title`, 750, wdth 112, 1.25rem to 1.625rem, line-height 1.1): operation titles, service names, machine names in the index, people's names, intake values.
- **Figure** (`--text-figure`, 800, 1.5rem to 2.25rem): certificate standards and large phone numbers.
- **Lead** (`--text-lead`, 1.125rem, line-height 1.45 to 1.5, measure about 36rem): the first paragraph of a sheet and the hero body.
- **Body** (`--text-body`, 1rem, line-height 1.5): reading text, registers.
- **Small** (`--text-small`, 0.875rem): notes, captions, machine types and makers, footer.
- **Label** (`--text-label`, 650, 0.75rem, 0.08em tracking, uppercase): register keys, intake cell captions, folios, sub-list headings, index column heads.
- **Figures** (tabular numerals): every number: nav numbers, folios, plate numbers, phone numbers, facts, operation numbers.

### Named Rules
**The One Family Rule.** Archivo only. Hierarchy is made with width and weight, never with a second face.

**The Tabular Figures Rule.** Every number is set with tabular figures so registers, indexes and phone numbers align like a printed table.

## Layout

One page grid: a frame of at most 1440px with gutter-wide side margins and twelve equal columns separated by the gutter. The grid is made visible: each sheet's rule carries twelve 1px ticks (10px tall) hanging from it, and the hero field draws seven ticks of its own because it spans columns 1–7 and ends in the gutter between columns 7 and 8. On desktop the hero is a full-bleed composition measured on that same grid, in two rows: headline field | footage on top; facts register | intake below, both opening on the same rule line. On screens below 1024px the reading order is headline field, intake, facts register, footage, so the primary action follows the headline.

Sub-pages open on Sheet 01 too: its tick line and folio hang from the header's own rule, above the page title. Sheets stack vertically: heavy rule, tick line with folio, a large gap (sheet-head) before the content, a large gap (sheet-end) at the bottom. Content inside sheets uses grid-12 spans (headline on 6 columns, supporting text from column 8). Registers use two equal columns; indexes use fixed thumb and number columns and fluid name, type and maker columns.

Responsive steps observed: 640px (fact register and intake cells go two-up; running head shows full text), 768px (operations go four-up), 900px (machine index and services register gain column heads; spec sheet goes 7:5), 1024px (desktop nav, hero splits into field and footage; intake cells stack in the narrower right column), 1280px (intake cells two-up again). The header is sticky, 76px, closed by a 2px ink rule. Below 640px the running head collapses to the sheet number alone on the tick line.

### Named Rules
**The Visible Grid Rule.** The twelve columns are drawn, not implied. New sheets open with the tick-line rule, and content snaps to the columns those ticks mark.

**The Folio-On-The-Rule Rule.** Sheet numbers sit on the rule at the right edge, small and tabular. Nothing small and uppercase is stacked above a heading.

## Elevation & Depth

None. The system is entirely flat: no shadows, no blur, no backdrop filter, no layered surfaces. Depth and grouping come from rules and from fields: a 2px ink rule opens a sheet, register or index; 1px ink hairlines separate rows; full red or full ink fields set a region apart. On red, the same rule grammar is drawn in white.

### Named Rules
**The Rules-Not-Boxes Rule.** Separate with a rule or a field, never with a shadow, a card or a floating panel.

## Shapes

Square everywhere (rounded.none). Buttons, cells, segmented controls, the phone block, photo frames and fields all have hard corners. Lines come in three weights only: the 2px ink sheet rule, the 1px ink hairline, and the 1px stone soft rule; the hero facts and people list redraw the first two in white on red. The one drawn icon is a 20px arrow with a 2px square-capped stroke, rotated for direction (right, down, up, up-right); the phone glyph on mobile uses the same stroke.

## Components

### Buttons
Square, solid, decisive.
- **Shape:** hard corners, 2px ink border, at least 52px tall, label left and arrow right.
- **Ink:** ink fill, white text; hover turns red (fill and border).
- **Line:** transparent with ink border and text; hover fills ink.
- **White:** for use on red fields; white fill, ink text; hover fills ink.
- **Transitions:** 120ms linear on background, color and border only.
- **Focus:** 3px red outline, 2px offset; white outline inside red fields.

### Intake Cells
The primary action pair, one component (`src/components/ui/intake.astro`) used in the hero, on the contact page and in the machines request band. Two adjoining cells under a 2px rule: the ink cell (send a drawing, email address) and the white cell (call production, phone number), each with a label caption, a large heavy value and a 24px arrow. Captions are ink (white in the ink cell); any cell turns red on hover. Inside a red field (`tone="red"`) the cells invert on hover instead: white turns ink, ink turns white. The cells sit two-up whenever the intake itself is at least 520px wide (a container query), stacked otherwise. The email may break before "@"; the phone never breaks. A grey note under them states what to send, who answers and when, and what comes back ("We reply with a proposed process and a lead time"), then two underlined text actions at 44px height: "Copy address" (shown only where the clipboard API exists; if copying is blocked it says so and spells the address out) and "All contacts". Never break these into floating buttons, and never rebuild the pair locally.

### Registers
Key-value lists for facts, spec sheets, certificates and company data: a 2px rule on top, each row closed by a 1px hairline, key in mid grey or label style, value heavy. In a red band the same register is drawn white on red.

### Machine Index and Spec Sheet
The signature interaction. A 2px-ruled list of rows: 72px cutout thumb (multiplied onto the paper), ink tabular number, wide-cut name, type in mid grey, maker, down arrow. On the home sheet and on the machines page alike, each row is a disclosure that opens in place into one shared spec sheet (`src/components/ui/machineSpec.astro`): plate image framed by rules on the left, spec register on the right (7:5 on desktop), deploying with a short top-down clip (320ms). Only one sheet is open at a time per list; closed rows nudge their arrow down 3px on hover. The register never repeats the row: it carries the maker (hidden from 900px, where the row has a maker column), the maker's country and only the figures stated in `specs` (`src/data/machines.ts`, keyed by `specLabels`: travels, table, swing, bar capacity, control and so on). A machine with no stated figures shows "Machine parameters on request" with who can give them, never filler rows. Deep links (`/machines#slug`) reset the filter if it hides the row, and the address follows the open sheet. The plate caption ends with "manufacturer image" until the client's own photographs replace the cutouts. The arrow turns up while open and the name stays red. A segmented filter (CNC / conventional / cutting with tabular counts) sits above the index.

### Services Register
Sheet 02 sets the services as one numbered register in two short lists, each named by a label: "In our hall" (machining) and "Finishing and delivery" (partners and transport). Rows carry an ink number, title-size name, description in mid grey, and a Machines column linking the index numbers that do the work (01–04, 05–07, 08, 09–11, 12) to the first of those machines on the machines page; rows with no named machine leave the column empty. Below 900px there is no column head, so the link sits under the description with its own "Machines" label. Materials and industries follow as a two-row register, then the parts plates (PHOTO 02–05).

### Operations Procession
The process as numbered operations 010, 020, 030, 040 in ink tabular figures, four columns separated by hairlines on a 2px rule. A 6px red track sits on that rule and runs across in four steps (1600ms, stepped) once when the list scrolls into view.

### Sheet Rule
The head of every sheet: twelve column ticks hanging from the rule and the folio ("List NN" in Slovak, "Sheet NN" in English) set on the rule at the right. Has a white tone for red fields.

### Plates
Photographs are shown in their natural colour, untreated (black-and-white was dropped at the client's request on 2026-11-21), and captioned with a tabular plate number, "FOTO 01" / "PHOTO 01", then a dot and a plain caption. Captions sit on an ink bar under the hero footage and in mid grey under part photos. The hero footage autoplays only at 1024px and wider, with motion allowed and no data saver; elsewhere it stays on its poster (served at the source's native 960px). A 44px ink square with the play/pause stroke icon sits at the right end of the caption bar and always lets the visitor start or stop it.

### Navigation
Sticky white bar, 76px, closed by a 2px ink rule. Items are preceded by ink tabular numbers (01–04). On desktop, hover and current page draw a 4px red bar sitting on the header rule; the production phone is a full-height red block at the right edge, turning ink on hover. On mobile, the bar carries the language picker, the phone as a 44px red square with the stroked phone glyph, and a square "Menu" label cell (a word, not a glyph) that fills ink while the ruled menu list is open; the current page is red. The language picker is a hairline-bordered segment of 44px cells with the current language filled ink, visible in the bar at every width.

### Red Bands
Full-width red fields that close a page with people or a request: white sheet rule and folio, statement heading, then either a white-ruled list of names with large underlined phone numbers (people band) or the intake cells in their red tone (machines request band).

## Do's and Don'ts

### Do:
- **Do** let logo red own an entire grid region or mark an action, at full strength only.
- **Do** open every sheet with the 2px ink rule, the twelve-tick line and a folio on the rule at the right.
- **Do** build content as registers, indexes and numbered sequences separated by 2px rules and 1px hairlines.
- **Do** set every number in tabular figures and number things the way a manual does (01, 010, FOTO 01).
- **Do** show photography in natural colour and caption it with its plate number.
- **Do** keep motion to the tick-line wipe on load, the stepped procession track, the spec-sheet deploy and short linear state changes; under reduced motion all of it stops (the hero video stays on its poster frame and the track shows complete).

### Don't:
- **Don't** tint, fade or gradient the red, or use a second accent color.
- **Don't** use shadows, blur, glass, rounded corners or cards.
- **Don't** set a small uppercase label above a heading; folios belong on the rule, and labels key registers or name sub-lists.
- **Don't** introduce a second typeface or a system display face; width and weight of Archivo carry the hierarchy.
- **Don't** use unnumbered images, or filter, tint or duotone photographs.
- **Don't** add icon glyphs beyond the drawn 2px arrow, the phone stroke and the play/pause stroke.

### Open items
- Certificate numbers, issuers and validity dates are pending; the certificates sheet renders only fields that are known.
- The parts photos (PHOTO 02–05) are real parts from the shop (confirmed by the client, 2026-11-16).
- The hero footage is 960×540 and trimmed to a 12-second loop (3.6 MB); a higher-resolution source would allow a sharper poster.
- The hero caption is neutral ("Footage from our workshop") until the client confirms which machines the footage shows.
- The contact map is third-party content and loads only when the visitor asks for it.
- Machine images are manufacturer cutouts multiplied onto the paper, not plates of the client's own machines.
