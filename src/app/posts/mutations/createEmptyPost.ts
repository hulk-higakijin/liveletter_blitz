import { resolver } from "@blitzjs/rpc"
import db from "db"

export default resolver.pipe(
  resolver.authorize(),
  async (input, ctx) => {
    const data = { title: "", emoji: "", userId: ctx.session.userId }
    const post = await db.post.create({ data })

    return post
  }
)
