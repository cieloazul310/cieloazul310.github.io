import { z, defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";

const postCollection = defineCollection({
  loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./content/post" }),
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
  loader: glob({ pattern: "**/*.yml", base: "./content/category" }),
  schema: z.object({
    name: z.string(),
    type: reference("categoryType"),
    description: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
  }),
});

const categoryTypeCollection = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "./content/categoryType" }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional().nullable(),
    categories: z.array(reference("category")),
  }),
});

export const collections = {
  post: postCollection,
  category: categoryCollection,
  categoryType: categoryTypeCollection,
};
