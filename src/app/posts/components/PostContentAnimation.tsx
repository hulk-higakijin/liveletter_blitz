"use client"

import { Pen } from "@prisma/client"
import { TypeAnimation } from "react-type-animation"

const PostContentAnimation = ({ pens }: { pens: Pen[] }) => {
  const sequence = pens.flatMap((pen, index) => {
    const nextPen = pens[index + 1]
    const delay = nextPen
      ? new Date(nextPen.createdAt).getTime() - new Date(pen.createdAt).getTime()
      : 100
    return [pen.content, delay]
  })

  return (
    <div className="whitespace-pre-wrap pt-4">
      <TypeAnimation sequence={sequence} wrapper="span" style={{ display: "inline-block" }} />
    </div>
  )
}

export default PostContentAnimation
