import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(6),
    password: z.string().min(6),
});

export const courseSchema = z.object({
    title: z.string(),
    description: z.string(),
    imageLink: z.string(),
    price: z.number()
})