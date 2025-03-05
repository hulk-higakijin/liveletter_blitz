"use client";
import { FORM_ERROR, PostForm } from "./PostForm";
import { CreatePostSchema } from "../schemas";
import { useMutation } from "@blitzjs/rpc";
import createPost from "../mutations/createPost";
import { useRouter } from "next/navigation";

export function NewPost() {
  const [createPostMutation] = useMutation(createPost);
  const router = useRouter();
  return (
    <PostForm
      submitText="Create Post"
      schema={CreatePostSchema}
      onSubmit={async (values) => {
        console.log(values);

        try {
          const post = await createPostMutation(values);
          router.push(`/posts/${post.id}`);
        } catch (error: any) {
          console.error(error);
          return {
            [FORM_ERROR]: error.toString(),
          };
        }
      }}
    />
  );
}
