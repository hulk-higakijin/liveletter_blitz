import { format } from "date-fns"
import { Metadata } from "next"
import { invoke } from "src/app/blitz-server"
import Avatar from "../../users/components/Avatar"
import getUser from "../../users/queries/getUser"
import PostTitleAnimation from "../components/PostTitleAnimation"
import getPost from "../queries/getPost"

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await invoke(getPost, { id: params.postId })
  return {
    title: post.title,
  }
}

type PostPageProps = {
  params: { postId: string }
}

export default async function Page({ params }: PostPageProps) {
  const post = await invoke(getPost, { id: params.postId })
  const user = await invoke(getUser, { id: post.userId })

  return (
    <div className="max-w-2xl mx-auto container px-4">
      <div className="pt-20 flex flex-col gap-10">
        <span className="text-6xl mx-auto">{post.emoji}</span>
        <PostTitleAnimation {...post} />
      </div>

      <div className="pt-10">
        <div className="flex text-sm gap-2">
          <Avatar />
          <p className="my-auto">higakijin</p>
          <p className="my-auto">{format(new Date(post.createdAt), "yyyy/MM/dd")}</p>
        </div>
      </div>
    </div>
  )
}
