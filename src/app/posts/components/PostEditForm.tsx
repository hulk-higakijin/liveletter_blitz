"use client"

import { useMutation } from "@blitzjs/rpc"
import { Pen, Post } from "@prisma/client"
import { useEffect, useState } from "react"
import createPen from "../../pens/mutations/createPen"
import updatePost from "../mutations/updatePost"
import TextareaAutosize from "react-textarea-autosize"
import PostEmojiPicker from "./PostEmojiPicker"

const INPUT_WAITING_MILSECONDS = 1000

const PostEditForm = ({ post, pens }: { post: Post; pens: Pen[] }) => {
  const [data, setData] = useState<Post>(post)
  const [updatePostMutation] = useMutation(updatePost)
  const [createPenMutation] = useMutation(createPen)

  useEffect(() => {
    const timer = setTimeout(async () => {
      await updatePostMutation({ ...data, status: "DRAFT" })
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
      <TextareaAutosize
        rows={10}
        placeholder="Text"
        className="bg-base-100 focus:outline-none resize-none w-full"
        defaultValue={pens.slice(-1)[0].content}
        onChange={async (e) => {
          await createPenMutation({ content: e.target.value, postId: post.id })
        }}
      />
    </div>
  )
}

export default PostEditForm
