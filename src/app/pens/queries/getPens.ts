import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetPensInput
  extends Pick<Prisma.PenFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy }: GetPensInput) => {
    const pens = await db.pen.findMany({ where, orderBy })
    return { pens }
  }
)
