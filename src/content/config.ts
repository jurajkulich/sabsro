// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
    author: z.string().default('Astroship'),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const teamCollectionCopy = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: image(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

const featuresCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

const aboutCollection = defineCollection({
  schema: z.object({
    layouttitle: z.string(),
    title: z.string(),
    subtitle1: z.string(),
    subtitle2: z.string(),
    subtitle3: z.string(),
  }),
});

const machinesCollection = defineCollection({
  schema: z.object({
    layouttitle: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const contactCollection = defineCollection({
  schema: z.object({
    layouttitle: z.string(),
    title: z.string(),
    contact: z.string(),
    contactmachinery: z.string(),
    contactaddress: z.string(),
  }),
});



// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  // 'team': teamCollection,
  'team': teamCollectionCopy,
  'about': aboutCollection,
  'features': featuresCollection,
  'machines': machinesCollection,
  'contact': contactCollection,
};