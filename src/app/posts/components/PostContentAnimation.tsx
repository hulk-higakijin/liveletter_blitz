"use client"

import { Pen } from "@prisma/client"
import { useState } from "react";

const PostContentAnimation = ({ pens, lastPen }: { pens: Pen[]; lastPen: Pen }) => {
  const [currentPenIndex, setCurrentPenIndex] = useState(0)

  return <div className="whitespace-pre-wrap pt-4">{pens[currentPenIndex].content}</div>
}

export default PostContentAnimation
