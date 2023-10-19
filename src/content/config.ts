
import { z, defineCollection, reference } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      lastmod: z.date().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()),
      category: reference("category"),
      author: z.string(),
      featuredImg: image()
        .optional()
        .catch((ctx) => {
          /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
          ctx.error;
          return undefined;
        }),
      featuredImgAlt: z.string().optional(),
    }),
});

const categoryCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    type: reference("categoryType"),
    description: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    index: z.number(),
  }),
});

const categoryTypeCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string().optional().nullable(),
    categories: z.array(reference("category")),
  }),
})

export const collections = {
  posts: postsCollection,
  category: categoryCollection,
  categoryType: categoryTypeCollection,
};
