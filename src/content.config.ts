import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog content collection. The Brew "Blog" tab publishes markdown files into
// src/content/blog/<slug>.md whose frontmatter MUST match this schema.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { blog };
