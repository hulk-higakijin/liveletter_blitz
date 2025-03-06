import { z } from "zod";

export const CreatePenSchema = z.object({
  postId: z.string(),
  content: z.string(),
});
