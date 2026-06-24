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

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    emoji: z.string(),
    url: z.string().optional(),
    image: z.string().optional(),
    stack: z.array(z.string()).optional(),
    status: z.enum(['activo', 'terminado', 'en pausa']).optional(),
  }),
});

export const collections = { articles, stories, bookReviews, projects };
