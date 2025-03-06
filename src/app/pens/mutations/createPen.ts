import { resolver } from "@blitzjs/rpc";
import db from "db";
import { CreatePenSchema } from "../schemas";

export default resolver.pipe(
  resolver.zod(CreatePenSchema),
  resolver.authorize(),
  async (input) => {
    const pen = await db.pen.create({ data: input });

    return pen;
  }
);
