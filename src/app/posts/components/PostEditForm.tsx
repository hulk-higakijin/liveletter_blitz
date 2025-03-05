"use client"

import { useMutation } from "@blitzjs/rpc"
import { Post } from "@prisma/client"
import { useEffect, useState } from "react"
import updatePost from "../mutations/updatePost"
import PostContentEditor from "./PostContentEditor"
import PostEmojiPicker from "./PostEmojiPicker"

const INPUT_WAITING_MILSECONDS = 1000

const PostEditForm = (post: Post) => {
  const [data, setData] = useState<Post>(post)
  const [updatePostMutation] = useMutation(updatePost)

  useEffect(() => {
    const timer = setTimeout(async () => {
      await updatePostMutation(data)
    }, INPUT_WAITING_MILSECONDS)

    return () => clearTimeout(timer)
  }, [data])

  return (
    <div className="flex flex-col gap-2 py-10">
      <div className="flex">
        <input
          type="text"
          placeholder="Title"
          className="input border-0 focus:outline-none w-full p-0 text-xl"
          defaultValue={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <PostEmojiPicker className="ml-auto my-auto" data={data} setData={setData} />
      </div>
      <PostContentEditor />
    </div>
  )
}

export default PostEditForm
