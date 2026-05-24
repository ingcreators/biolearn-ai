import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        part: z
          .enum([
            'start',
            'fundamentals',
            'molecular-biology',
            'cell-biology',
            'genomics',
            'methods',
            'bioinformatics',
            'statistics',
            'figures',
            'papers',
            'glossary',
            'resources',
            'paths',
            'about',
          ])
          .optional(),
        module: z.string().optional(),
        level: z.enum(['foundation', 'intermediate', 'advanced']).optional(),
        priority: z.enum(['P0', 'P1', 'P2']).optional(),
        order: z.number().optional(),
        learningPaths: z
          .array(z.enum(['foundations', 'figure-reading', 'paper-reading']))
          .optional(),
        relatedTerms: z.array(z.string()).optional(),
        prerequisites: z.array(z.string()).optional(),
      }),
    }),
  }),
};
