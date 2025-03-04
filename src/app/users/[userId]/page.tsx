import { Metadata } from "next"
import Link from "next/link"
import { invoke } from "src/app/blitz-server"
import Avatar from "../components/Avatar"
import getUser from "../queries/getUser"

export async function generateMetadata({ params }: UserPageProps): Promise<Metadata> {
  const user = await invoke(getUser, { id: params.userId })
  return {
    title: `User ${user.id} - ${user.name}`,
  }
}

type UserPageProps = {
  params: { userId: string }
}

export default async function Page({ params }: UserPageProps) {
  const user = await invoke(getUser, { id: params.userId })

  return (
    <div className="liveletter_container">
      <div className="flex gap-2 pt-20">
        <Avatar />
        <p className="my-auto">higakijin</p>
      </div>
    </div>
  )
}
