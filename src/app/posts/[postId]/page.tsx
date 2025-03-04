import { Metadata } from "next";
import { invoke } from "src/app/blitz-server";
import getPost from "../queries/getPost";

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await invoke(getPost, { id: params.postId });
  return {
    title: post.title
  };
}

type PostPageProps = {
  params: { postId: string };
};

export default async function Page({ params }: PostPageProps) {
  const post = await invoke(getPost, { id: params.postId });
  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
}
