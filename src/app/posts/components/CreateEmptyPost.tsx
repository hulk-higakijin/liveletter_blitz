"use client"

import { useMutation } from "@blitzjs/rpc"
import { HiOutlinePlus } from "@react-icons/all-files/hi/HiOutlinePlus"
import { useRouter } from "next/navigation"
import createEmptyPost from "../mutations/createEmptyPost"

const CreateEmptyPost = () => {
  const router = useRouter()
  const [createEmptyPostMutation] = useMutation(createEmptyPost)
  const handleCreateEmptyPost = async () => {
    const res = await createEmptyPostMutation()
    router.push(`/posts/${res.id}`)
  }

  return (
    <button
      className="ml-auto btn btn-neutral btn-circle btn-sm"
      onClick={async () => {
        await handleCreateEmptyPost()
      }}
    >
      <HiOutlinePlus className="text-lg" />
    </button>
  )
}

export default CreateEmptyPost
