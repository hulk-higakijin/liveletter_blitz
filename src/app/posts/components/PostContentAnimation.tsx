"use client"

import { useQuery } from "@blitzjs/rpc"
import { Pen, Post } from "@prisma/client"
import { Suspense, useEffect, useState } from "react"
import { TypeAnimation } from "react-type-animation"
import getPens from "../../pens/queries/getPens"

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
  console.log("pens", pens)

  const sequence = pens.flatMap((pen, index) => {
    const nextPen = pens[index + 1]
    const delay = nextPen
      ? new Date(nextPen.createdAt).getTime() - new Date(pen.createdAt).getTime()
      : 100
    return [pen.content, delay, () => setCurrentIndex(currentIndex + 1)]
  })

  useEffect(() => {
    console.log("currentIndex", currentIndex)
  }, [currentIndex])

  return (
    <div className="whitespace-pre-wrap pt-4">
      <TypeAnimation sequence={sequence} wrapper="span" style={{ display: "inline-block" }} />
    </div>
  )
}

export default PostContentAnimation
