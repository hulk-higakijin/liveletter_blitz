import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreatePostSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreatePostSchema),
  resolver.authorize(),
  async (input, ctx) => {
    const post = await db.post.create({ data: { ...input, userId: ctx.session.userId } })

    return post
  }
)
