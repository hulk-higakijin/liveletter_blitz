import getPens from "@/src/app/pens/queries/getPens"
import { invoke } from "src/app/blitz-server"
import PostEditForm from "../../components/PostEditForm"
import getPost from "../../queries/getPost"

type PostPageProps = {
  params: { postId: string }
}

export default async function Page({ params }: PostPageProps) {
  const post = await invoke(getPost, { id: params.postId })
  const { pens } = await invoke(getPens, { where: { postId: post.id }, orderBy: { createdAt: "asc" } })
  console.log(pens)

  return (
    <div className="container max-w-lg mx-auto px-4">
      <PostEditForm post={post} pens={pens} />
    </div>
  )
}
