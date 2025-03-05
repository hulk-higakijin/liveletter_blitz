"use client"

import { Post } from "@prisma/client"
import { HiOutlineEmojiHappy } from "@react-icons/all-files/hi/HiOutlineEmojiHappy"
import EmojiPicker from "emoji-picker-react"
import { useState } from "react"

const PostEmojiPicker = ({
  className,
  data,
  setData,
}: {
  className?: string
  data: Post
  setData: (data: Post) => void
}) => {
  const { emoji } = data
  const [open, setOpen] = useState(false)

  return (
    <div className={className}>
      <div className="relative flex my-auto">
        <button onClick={() => setOpen(!open)}>
          {emoji ? (
            <span className="text-3xl my-auto">{emoji}</span>
          ) : (
            <HiOutlineEmojiHappy className="text-3xl my-auto" />
          )}
        </button>
        {open && (
          <div className="absolute top-10 right-0">
            <EmojiPicker
              onEmojiClick={(emoji) => {
                setData({ ...data, emoji: emoji.emoji })
                setOpen(false)
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default PostEmojiPicker
