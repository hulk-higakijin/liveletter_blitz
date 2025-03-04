import { Post } from "@prisma/client"

const PostCard = ({ title, emoji }: Post) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {emoji}
        </p>
      </div>
    </div>
  )
}

export default PostCard
