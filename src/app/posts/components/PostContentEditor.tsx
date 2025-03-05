"use client"

import TextareaAutosize from "react-textarea-autosize"

const PostContentEditor = ({ defaultText }: { defaultText?: string }) => {
  return (
    <TextareaAutosize
      rows={10}
      placeholder="Text"
      className= "bg-base-100 focus:outline-none resize-none w-full"
      defaultValue={defaultText}
    />
  )
}

export default PostContentEditor
