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

<!-- impeccable:design-map -->
Name: Švehla a Blaško
Colors: primary: logo-red #e30016; neutral: ink #1b1918; neutral: paper #ffffff; neutral: stone #d9d6d0; neutral: mid-grey #5f5a55
Fonts: Archivo Variable (display, page-title, statement, headline, title, lead, body, small, label, figure)
Spacing: gutter clamp(16px, 2.2vw, 32px), sheet-head clamp(30px, 5vw, 78px), sheet-end clamp(40px, 6vw, 88px), frame-max 1440px
Radius: none 0px
North Star: "The Identity Manual"
Rules:
- The Full-Strength Rule. Red appears at 100% or not at all.
- The Red Means Owned-Or-Action Rule. Red either owns an entire region of the grid or marks something the buyer can act on.
- The One Family Rule. Archivo only.
- The Tabular Figures Rule. Every number is set with tabular figures so registers, indexes and phone numbers align like a printed table.
- The Visible Grid Rule. The twelve columns are drawn, not implied.
- The Folio-On-The-Rule Rule. Sheet numbers sit on the rule at the right edge, small and tabular.
- The Rules-Not-Boxes Rule. Separate with a rule or a field, never with a shadow, a card or a floating panel.
Don't:
- Don't tint, fade or gradient the red, or use a second accent color.
- Don't use shadows, blur, glass, rounded corners or cards.
- Don't set a small uppercase label above a heading; folios belong on the rule, and labels key registers or name sub-lists.
- Don't introduce a second typeface or a system display face; width and weight of Archivo carry the hierarchy.
- Don't filter, tint, duotone or desaturate photographs, and don't add plate numbers ("FOTO 01") back to captions.
- Don't add icon glyphs beyond the drawn 2px arrow, the phone stroke and the play/pause stroke.
Do:
- Do let logo red own an entire grid region or mark an action, at full strength only.
- Do open every sheet with the 2px ink rule, the twelve-tick line and a folio on the rule at the right.
- Do build content as registers, indexes and numbered sequences separated by 2px rules and 1px hairlines.
- (+3 more)
Map: src/styles/global.css
Map: src/components/ui/intake.astro
Map: src/components/ui/machineSpec.astro
Map: src/data/machines.ts
Map: src/components/processFlow.astro
Map: src/pages/index.astro
Map: src/components/drillPlate.astro
Map: src/data/drillCycle.ts
Full: .impeccable/design-full.md (read a section when you need its detail)
