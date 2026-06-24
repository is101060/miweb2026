import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = ['Tecnología', 'Diseño', 'Personal'] as const;
export type Category = typeof CATEGORIES[number];

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(CATEGORIES),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const bookReviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/book-reviews' }),
  schema: z.object({
    slug: z.string(),
    rating: z.number().min(1).max(5),
    date: z.date(),
  }),
});

export const collections = { articles, stories, bookReviews };
