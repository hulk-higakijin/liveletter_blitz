import { Metadata } from "next"
import { Suspense } from "react"
import { invoke } from "src/app/blitz-server"
import CreateEmptyPost from "../../posts/components/CreateEmptyPost"
import PostCard from "../../posts/components/PostCard"
import getPosts from "../../posts/queries/getPosts"
import Avatar from "../components/Avatar"
import getUser from "../queries/getUser"

export async function generateMetadata({ params }: UserPageProps): Promise<Metadata> {
  const user = await invoke(getUser, { id: params.userId })
  return {
    title: `User ${user.id} - ${user.name}`,
  }
}

type UserPageProps = {
  params: { userId: string }
}

export default async function Page({ params }: UserPageProps) {
  const user = await invoke(getUser, { id: params.userId })
  const { posts } = await invoke(getPosts, {
    where: {
      userId: user.id,
      OR: [{ status: "DRAFT" }, { status: "PUBLISHED" }],
    },
    orderBy: { id: "desc" },
  })

  return (
    <div>
      <div className="liveletter_container">
        <div className="flex gap-2 pt-20">
          <Avatar />
          <p className="my-auto">higakijin</p>
          <CreateEmptyPost />
        </div>
      </div>
      <div className="liveletter_container">
        <div className="pt-10">
          <div className="grid md:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
