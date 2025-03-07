import { NotFoundError } from "blitz";
import { resolver } from "@blitzjs/rpc";
import db from "db";
import { z } from "zod";

const GetPost = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.string().optional().refine(Boolean, "Required"),
});

export default resolver.pipe(
  resolver.zod(GetPost),
  async ({ id }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const post = await db.post.findFirst({ where: { id } });

    if (!post) throw new NotFoundError();

    return post;
  }
);
