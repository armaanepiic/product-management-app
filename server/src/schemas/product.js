import { z } from "zod";

export const CreateProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().positive("Price must be a positive number"),
  categories: z.array(z.string()).optional(),
  stockQuantity: z
    .number()
    .int()
    .nonnegative("Stock quantity must be a non-negative integer"),
});