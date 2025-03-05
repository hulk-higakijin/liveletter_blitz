import { invoke } from "src/app/blitz-server"
import PostEditForm from "../../components/PostEditForm"
import getPost from "../../queries/getPost"

type PostPageProps = {
  params: { postId: string }
}

export default async function Page({ params }: PostPageProps) {
  const post = await invoke(getPost, { id: params.postId })

  return (
    <div className="container max-w-lg mx-auto px-4">
      <PostEditForm {...post} />
    </div>
  )
}
