import Link from "next/link"
import { Suspense } from "react"
import { LogoutButton } from "../(auth)/components/LogoutButton"

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <Suspense>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            LiveLetter
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              {isLoggedIn ? (
                <LogoutButton />
              ) : (
                <Link href="/login" className="btn btn-primary btn-sm">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </Suspense>
  )
}

export default Navbar
