import Link from "next/link"
import { invoke } from "./blitz-server"
import { LogoutButton } from "./(auth)/components/LogoutButton"
import styles from "./styles/Home.module.css"
import getCurrentUser from "./users/queries/getCurrentUser"

export default async function Home() {
  const currentUser = await invoke(getCurrentUser, null)
  return (
    <div>
      <p className="font-bold text-red-500 text-2xl">Hello, {currentUser?.email || "Guest"}</p>
    </div>
  )
}
