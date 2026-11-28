# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

B2B buyers who source machined parts from an outside shop:

- **Engineers and designers**: they own the drawing and judge the shop on feasibility, tolerances, materials and machine capability.
- **Purchasing / procurement**: they compare suppliers on reliability, lead time, certifications and how easy the shop is to deal with.
- **Foreign clients (DE, AT, CZ and beyond)**: export customers who evaluate the shop remotely. The English version carries the same weight as the Slovak one.

## Product Purpose

The marketing website of **Švehla a Blaško s.r.o.**, a Slovak family-owned CNC and classical machining shop in Nové Mesto nad Váhom. The site exists to make the shop look credible to a buyer who has never visited it, and then to get that buyer to **call or email** the right person. Success means a qualified B2B buyer trusts the shop enough to pick up the phone or write. Contact is by direct phone and email only; the site currently has no web form (the unused Web3Forms component was removed on 2026-11-17).

## Positioning

A real, owner-run manufacturing company, not a broker or a faceless platform. It has a history going back to 1990 (the current company was founded in 2012 as Švehla s.r.o.), about 20 staff, about 600 m² in total for the production hall, warehouse, cutting room and storage, and a named machine park. Buyers deal directly with the owners and the production lead. Credibility comes from concrete facts: machines, people and the premises.

## Operating Context

- Buyers arrive with a drawing or a part need and judge the shop before making contact. The machine park is a key part of that judgement.
- Contact is person-to-person. The primary contact is Ing. Boris Blaško (owner; his phone is the site's main line, drawings go to info@svehlasro.sk). Ján Švehla (managing director, production) is reachable at vyroba@svehlasro.sk. Office hours are Mon–Fri 07:00–15:30.
- Company IDs (IČO 47419181, DIČ SK2023864601) and the address (Kočovská 2583/22, 915 01 Nové Mesto nad Váhom) are part of B2B due diligence.

## Capabilities and Constraints

- **Services:** CNC milling, CNC turning, drilling and tapping, manual milling, cutting (band saws), grooving, surface finishing through partners (anodizing, nitriding, hardening, blasting), welding, and local delivery (Peugeot Boxer, 3300 mm platform). Materials: steel, stainless steel, aluminium, copper alloys, technical plastics. Focus is on prototypes and small series.
- **Machine park** (content in `src/content/team/`): Doosan DNM6700, MAS MCV 1016, MCV 800, FNG40 CNC, Trens SBL 300, SE 520, SBX 500, SN 50, SN 500, SV18, Eastar 300, and Bianco 370 / Pegas saws.
- **Industries served** (from the ticker): energy, food-processing machinery, automation lines, maintenance spare parts, fixtures and clamping, custom one-offs.
- **Stack:** Astro 7 static site, Tailwind 4, `astro-i18n-aut`. Slovak is the default locale (`/`) and English lives at `/en`. Deployed to GitHub Pages under base path `/sabsro`.
- **Language:** every piece of user-facing copy ships in both SK and EN.

## Brand Commitments

- Company name: Švehla a Blaško s.r.o. (keep the diacritics).
- Voice: plain, factual and engineering-literate. The tone is a family firm that answers the phone, not startup marketing.
- Logo: `src/assets/logo.svg`.

## Evidence on Hand

- **Certifications:** removed from the site at the owner's request. Do not reintroduce ISO or certificate claims.
- **Confirmed claims (user, 2026-11-16):** the team is senior-led; lead times are short; every batch ships with an inspection/QC report. These may be stated as fact in both SK and EN. Specific numbers (days, tolerances) are still unconfirmed.
- **Unverified figures:** the hero stats "0.01 mm tolerance" and "20-day batch lead time" are **not confirmed**. Do not present them as fact or build new claims on them until the user verifies them. "Established 1990" is supported by the About copy.
- **Examples of work (2026-11-28):** `/parts` shows example part photos (a showcase, not a catalogue) with material and process per entry. Those materials and processes were drafted from the photos and are **pending the owners' check** (`verified: false` in `src/data/parts.ts`); correct them there, do not build further claims on them until verified.
- **Real imagery:** shop photos in `src/assets/carousel/`, machine photos in `src/assets/stroje/`, and shop footage `src/assets/hero.mp4`.
- **Absent:** customer names, testimonials, case studies and pricing. Do not fabricate any of them.

## Product Principles

1. **Facts over adjectives.** Name the machine, the material and the person. Unverified claims stay out.
2. **A real person is one step away.** Phone numbers and named contacts are always within easy reach.
3. **Equal in both languages.** The EN site is a first-class experience for foreign buyers, not a translation afterthought.
4. **Speak to both the engineer and the buyer.** Engineers need technical depth (capabilities, machines) and procurement needs due-diligence signals (company IDs, history).
