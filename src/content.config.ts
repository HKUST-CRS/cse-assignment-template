import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
	loader: glob({ base: './src/content', pattern: '*.md' }),
	schema: () =>
		z.object({
			courseCode: z.string(),
			courseName: z.string(),
			assignmentCode: z.string(),
			assignmentName: z.string(),
			maintainers: z.array(z.object({
				name: z.string(),
				email: z.string().email(),
				note: z.string().optional(),
			})).optional().default([]),
			links: z.array(z.object({
				name: z.string(),
				link: z.string().url(),
				note: z.string().optional(),
			})).optional().default([]),
		}),
});

export const collections = { docs };
