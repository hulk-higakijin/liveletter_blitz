import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PostsList } from "./components/PostsList";

export const metadata: Metadata = {
  title: "Posts",
  description: "List of posts",
};

export default function Page() {
  return (
    <div>
      <p>
        <Link href={"/posts/new"}>Create Post</Link>
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <PostsList />
      </Suspense>
    </div>
  );
}
