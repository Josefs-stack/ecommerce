'use client'

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { MdLogout } from "react-icons/md"
import { FaUser } from "react-icons/fa"

export default function UserInfo() {
  const { data: session, status } = useSession()

  console.log("Session:", session)
  console.log("Status:", status)

  if (session?.user) {
    return (
      <div className="w-auto h-full flex flex-col items-center">

        <button
          className="w-16 h-full text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer"
          onClick={
            () => signOut({ callbackUrl: "/" })
          }
        >
          <MdLogout size={24} />
        </button>
      </div>
    )
  }

  return (
    <Link
      href="/LoginPage"
      className="w-16 h-full text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer"
    >
      <FaUser size={24} />
</Link>
  )
}
