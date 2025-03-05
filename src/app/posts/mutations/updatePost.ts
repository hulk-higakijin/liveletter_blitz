import { invoke, resolver } from "@blitzjs/rpc"
import db from "db"
import getPost from "../queries/getPost"
import { UpdatePostSchema } from "../schemas"

export default resolver.pipe(
  resolver.zod(UpdatePostSchema),
  resolver.authorize(),
  async ({ id, ...data }, ctx) => {
    let post = await invoke(getPost, { id })

    if (post.userId !== ctx.session.userId) {
      throw new Error("You are not authorized to perform this action")
    }

    post = await db.post.update({ where: { id }, data })

    return post
  }
)
