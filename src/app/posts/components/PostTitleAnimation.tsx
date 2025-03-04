"use client"
import { Post } from "@prisma/client"
import { TypeAnimation } from "react-type-animation"

const PostTitleAnimation = ({ title }: Post) => {
  return (
    <div className="text-xl">
      <TypeAnimation
        sequence={[title, 1000]}
        wrapper="span"
        speed={50}
        style={{ display: "inline-block" }}
        repeat={1}
      />
    </div>
  )
}

export default PostTitleAnimation
