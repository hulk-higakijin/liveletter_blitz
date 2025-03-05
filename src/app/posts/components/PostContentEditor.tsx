"use client"

import { useMutation } from "@blitzjs/rpc"
import TextareaAutosize from "react-textarea-autosize"
import createPen from "../../pens/mutations/createPen";

const PostContentEditor = ({ postId, defaultText }: { postId: string; defaultText?: string }) => {
  const [createPenMutation] = useMutation(createPen)

  return (
    <TextareaAutosize
      rows={10}
      placeholder="Text"
      className="bg-base-100 focus:outline-none resize-none w-full"
      defaultValue={defaultText}
      onChange={async (e) => {
        await createPenMutation({ content: e.target.value, postId })
      }}
    />
  )
}

export default PostContentEditor
