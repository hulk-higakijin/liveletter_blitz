import { resolver } from "@blitzjs/rpc"
import db from "db"
import { CreateEmptyPostSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(CreateEmptyPostSchema),
  resolver.authorize(),
  async (_, ctx) => {
    const data = { title: "", emoji: "", userId: ctx.session.userId }
    const post = await db.post.create({ data })

    return post
  }
)
