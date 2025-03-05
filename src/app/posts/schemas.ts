import { z } from "zod"

export const CreatePostSchema = z.object({
  title: z.string().min(1),
  emoji: z.string().length(4),
  // template: __fieldName__: z.__zodType__(),
})

export const CreateEmptyPostSchema = z.object({})

export const UpdatePostSchema = CreatePostSchema.merge(
  z.object({
    id: z.number(),
    userId: z.undefined(),
  })
)

export const DeletePostSchema = z.object({
  id: z.number(),
})
