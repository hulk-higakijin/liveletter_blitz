import { Metadata } from "next"
import { invoke } from "src/app/blitz-server"
import PostCard from "../../posts/components/PostCard"
import getPosts from "../../posts/queries/getPosts"
import Avatar from "../components/Avatar"
import getUser from "../queries/getUser"
import Link from "next/link"
import { HiOutlinePlus } from "@react-icons/all-files/hi/HiOutlinePlus"

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
  const { posts } = await invoke(getPosts, { where: { userId: user.id }, orderBy: { id: "desc" } })

  return (
    <div>
      <div className="liveletter_container">
        <div className="flex gap-2 pt-20">
          <Avatar />
          <p className="my-auto">higakijin</p>
          <Link href={"/posts/new"} className="ml-auto btn btn-neutral btn-circle btn-sm">
            <HiOutlinePlus className="text-lg" />
          </Link>
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
