import { defineCollection, z } from "astro:content";
 const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.string(),
    education: z.array(z.string()),
    experience: z.array(z.string()),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const work = defineCollection({
  schema: z.object({
    link: z.string().optional(),
    project: z.string().optional(),
    year: z.string().optional(),
    client: z.string().optional(),
    work: z.string(),
    credits: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
        })
      )
      .optional(),

    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const services = defineCollection({
  schema: z.object({
    service: z.string(),
    description: z.string(),
  }),
});
const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
 });
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date(),
  }),
});
export const collections = {
  team: team,
  work: work,
  services: services,
  infopages: infopages,
  posts: postsCollection,
};