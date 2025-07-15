// src/schema/formSchema.js
import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  website: z
    .string()
    .url("Invalid URL")
    .or(z.literal("")) 
    .optional(),
  email: z.string().email("Invalid email"),
  comment: z.string().min(3, "Comment must be at least 3 characters"),
});
