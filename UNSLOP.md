# Unslop pass

Done with the unslop skill (by Damir Sokolovsky, @heydamir, CC BY 4.0), 25 November 2026. The template was designed against the skill from the start, so the audit below covers what the first build still had.

## Audit

Slop level: light.

- Attorney count read "1 attorneys" in the practice index (`index.astro`)
- Money figures in two formats, `$2.4M` next to `$640,000` (`site.ts` results)
- A two-tone gradient on the attorney portrait placeholder (`attorneys/[slug].astro`)
- A dead band of about 170px between each inner page heading and its first section (`.section` padding after `.page-head`)
- Checked and not found: uppercase tracked eyebrows, pill badges, glows or washes, gradient text, emoji, heavy headings, italic emphasis, trailing periods on headlines and buttons, hype words, looping motion, hover scale

## Direction

- Product: the website of a twelve-lawyer firm in Hartwell, Ohio, so people can see whether the firm handles their problem, read about the lawyer they'd work with and ask for a consultation
- Character: measured, exact, unhurried
- World: a bound legal brief, its table of contents, paper stock and navy ink, an oxblood rule
- Moments: the practice index in the hero, set like a contents page with dotted leaders; the attorney pull line with its oxblood rule
- Signature: the section mark numbering (§ 1 to § 6) for practice areas, used in the index, practice pages, results and the footer only

## What changed

- Spacing: inner pages start their first section 40 to 64px under the heading instead of 112px
- Color: portrait placeholder is one flat sunk paper tone; oxblood only on the section marks, the pull line rule and focus
- Copy: "1 attorney" singular; consistent results copy with a sample notice on the results page, practice pages and home
- Type: Spectral 400 for headings and figures, Libre Franklin 400 and 500 for everything else, sentence case labels, tabular figures
- Details: all money figures written out in full in one format; 4px radius on buttons, inputs and filters
- Motion: color changes on hover, a 0.98 press on buttons, nothing else

screenshot-2: Attorney bio page (Margaret Whitcombe)
screenshot-3: Case results page with the sample notice and area filter
