"use client"

import { useQuery } from "@blitzjs/rpc"
import { Pen, Post } from "@prisma/client"
import { Suspense, useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import getPens from "../../pens/queries/getPens"

const MAX_KEY_TYPING_BLANK_MILLISECONDS = 5000
const TYPING_SPEAD = 1000

const PostContentAnimation = (post: Post) => {
  return (
    <Suspense>
      <Wrapper {...post} />
    </Suspense>
  )
}

const Wrapper = ({ id: postId }: Post) => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [{ pens }] = useQuery(getPens, { where: { postId } })

  const sequence = pens.flatMap((pen, index) => {
    const nextPen = pens[index + 1]
    const delay = nextPen
      ? Math.min(
          (new Date(nextPen.createdAt).getTime() - new Date(pen.createdAt).getTime()) / TYPING_SPEAD,
          MAX_KEY_TYPING_BLANK_MILLISECONDS
        )
      : 100
    return [pen.content, delay, () => setCurrentIndex(currentIndex + 1)]
  })

  return (
    <div className="whitespace-pre-wrap pt-4">
      <TypeAnimation
        sequence={sequence}
        wrapper="span"
        style={{ display: "inline-block" }}
        cursor={false}
      />
    </div>
  )
}

export default PostContentAnimation
