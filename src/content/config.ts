// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const programsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    hasBadge: z.boolean().default(false),
    image: image(),
    showOnHomepage: z.boolean().default(false),
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  programs: programsCollection,
};