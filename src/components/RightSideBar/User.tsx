"use client"

import { FC } from "react"
import { toast } from "sonner"

interface IUser {
  fullname: string
  login: string
}
const User: FC<IUser> = ({ fullname, login }) => {
  const followHandler = () => {
    toast("Feature not implemented yet")
  }
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-3 last:rounded-b-xl transition duration-150">
      <div className="h-10 w-10 bg-neutral-600 rounded-full"></div>
      <div className="flex flex-col">
        <div>{fullname}</div>
        <div className="text-sm text-gray-400">{login}</div>
      </div>
      <div className="flex justify-end grow">
        <button
          onClick={followHandler}
          className="rounded-full px-6 py-2 bg-white text-neutral-900 hover:bg-primary hover:text-white transition duration-150"
        >
          Follow
        </button>
      </div>
    </div>
  )
}

export default User
