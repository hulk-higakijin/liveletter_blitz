import { Post } from "@prisma/client"
import { format } from "date-fns"

const PostCard = ({ title, emoji, createdAt }: Post) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="bg-blue-100 h-40 md:h-32 rounded-lg text-3xl">
          {emoji}
      </figure>
      <div className="card-body p-4">
        <h2 className="text-lg">{title}</h2>
        <p className="text-sm">
          {format(new Date(createdAt), "yyyy/MM/dd")}
        </p>
      </div>
    </div>
  )
}

export default PostCard
