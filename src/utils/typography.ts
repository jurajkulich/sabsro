// Slovak typesetting: a one-letter word (a, i, k, o, s, u, v, z) never ends a line, it travels
// with the word after it. The same holds for an academic title before a name and a number
// before its unit. Applied to text between tags only; scripts, styles and preformatted blocks
// are left untouched.

const NBSP = ' '

const TOKEN = /(<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>|<pre\b[\s\S]*?<\/pre>|<textarea\b[\s\S]*?<\/textarea>|<[^>]*>)/i

const SHORT_WORD = /(^|[\s(„"])([aikosuvzAIKOSUVZ])[ \t\n\r]+(?=\S)/g
const TITLE = /\b(Ing\.|Mgr\.|Bc\.|Dr\.)[ \t\n\r]+(?=\S)/g
const UNIT = /(\d)[ \t\n\r]+(mm|m²|m2|kg|ks|°)(?![\p{L}\d])/gu

const bindText = (text: string) =>
  text
    // Run twice: "a v meste" has two short words in a row, and a match consumes the space between them.
    .replace(SHORT_WORD, `$1$2${NBSP}`)
    .replace(SHORT_WORD, `$1$2${NBSP}`)
    .replace(TITLE, `$1${NBSP}`)
    .replace(UNIT, `$1${NBSP}$2`)

// split() with a capturing group alternates text (even) and tags or skipped blocks (odd).
export const bindShortWords = (html: string) =>
  html
    .split(TOKEN)
    .map((part, i) => (i % 2 ? part : bindText(part)))
    .join('')
