import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    primary_keyword: z.string(),
    secondary_keywords: z.array(z.string()).optional(),
    category: z.enum(['technical', 'interview-prep', 'job-search', 'industry', 'recruiting-insider']),
    date: z.string(),
    author: z.string().default('Sanjay Gupta'),
    internal_links: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
