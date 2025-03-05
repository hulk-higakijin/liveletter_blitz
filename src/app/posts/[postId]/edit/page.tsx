"use client"

import PostContentEditor from "../../components/PostContentEditor"
import PostEmojiPicker from "../../components/PostEmojiPicker"

export default async function Page() {
  return (
    <div className="container max-w-lg mx-auto px-4">
      <div className="flex flex-col gap-2 py-10">
        <div className="flex">
          <input
            type="text"
            placeholder="Title"
            className="input border-0 focus:outline-none w-full p-0 text-xl"
          />
          <PostEmojiPicker className="ml-auto my-auto" />
        </div>
        <PostContentEditor />
      </div>
    </div>
  )
}
