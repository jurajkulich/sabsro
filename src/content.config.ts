import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

// Entry ids keep the `<locale>/<name>` shape (e.g. `sk/about`), which the
// pages rely on for `getEntry(...)` and locale filtering.
const markdown = (dir: string) => glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${dir}` })

const blog = defineCollection({
  loader: markdown('blog'),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
})

const team = defineCollection({
  loader: markdown('team'),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      name: z.string(),
      title: z.string(),
      avatar: z.object({
        src: image(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
    }),
})

const features = defineCollection({
  loader: markdown('features'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        // Machine index numbers (as on /machines) where the content names the machines.
        machines: z.string().optional(),
        // 'shop' = machining done in our own hall; 'around' = finishing through partners and delivery.
        group: z.enum(['shop', 'around']).default('shop'),
      }),
    ),
  }),
})

const about = defineCollection({
  loader: markdown('about'),
  schema: z.object({
    layouttitle: z.string(),
    title: z.string(),
    subtitle1: z.string(),
    subtitle2: z.string(),
    subtitle3: z.string(),
  }),
})

const machines = defineCollection({
  loader: markdown('machines'),
  schema: z.object({
    layouttitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
})

const contact = defineCollection({
  loader: markdown('contact'),
  schema: z.object({
    layouttitle: z.string(),
    title: z.string(),
    contact: z.string(),
    contactmachinery: z.string(),
    contactaddress: z.string(),
  }),
})

export const collections = { blog, team, about, features, machines, contact }
