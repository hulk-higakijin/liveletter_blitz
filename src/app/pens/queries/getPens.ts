import { paginate } from "blitz"
import { resolver } from "@blitzjs/rpc"
import db, { Prisma } from "db"

interface GetPensInput
  extends Pick<Prisma.PenFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(
  resolver.authorize(),
  async ({ where, orderBy, skip = 0, take = 100 }: GetPensInput) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: pens,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () => db.pen.count({ where }),
      query: (paginateArgs) => db.pen.findMany({ ...paginateArgs, where, orderBy }),
    })

    return {
      pens,
      nextPage,
      hasMore,
      count,
    }
  }
)
