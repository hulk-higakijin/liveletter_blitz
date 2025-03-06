import Link from "next/link"
import { invoke } from "./blitz-server"
import { LogoutButton } from "./(auth)/components/LogoutButton"
import styles from "./styles/Home.module.css"
import getCurrentUser from "./users/queries/getCurrentUser"
import Navbar from "./components/Navbar"

export default async function Home() {
  const currentUser = await invoke(getCurrentUser, null)
  return (
    <div className="liveletter_container">
      <Navbar isLoggedIn={!!currentUser} />
      <div className="flex gap-10 pt-10">
        <span className="text-[100px]">😆</span>
        <p className="my-auto">ようこそ、絶対にAIが沸かないサイトへ</p>
      </div>
    </div>
  )
}
