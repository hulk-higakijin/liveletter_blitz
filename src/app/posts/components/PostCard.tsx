import { Routes } from "@blitzjs/next"
import { Post } from "@prisma/client"
import { format } from "date-fns"
import Link from "next/link"

const PostCard = ({ id, title, emoji, createdAt }: Post) => {
  return (
    <Link href={`/posts/${id}`} className="card bg-base-100 shadow-sm">
      <figure className="bg-blue-100 h-40 md:h-32 rounded-lg text-3xl">{emoji}</figure>
      <div className="card-body p-2">
        <h2>{title}</h2>
        <p className="text-sm">{format(new Date(createdAt), "yyyy/MM/dd")}</p>
      </div>
    </Link>
  )
}

export default PostCard
