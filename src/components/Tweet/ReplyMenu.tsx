"use client"
import { BsThreeDots } from "react-icons/bs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { FC, useState } from "react"
import { deleteReply } from "@/app/tweets/deleteReply"

interface ITweetMenuProps {
  replyAuthId: string
  userId: string
  replyId: string
}

const ReplyMenu: FC<ITweetMenuProps> = ({ userId, replyAuthId, replyId }) => {
  const [isAuth, setIsAuth] = useState<boolean>(userId === replyAuthId)
  const onDeleteReplyHandler = () => {
    deleteReply(replyId, userId)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-secondary-foreground rounded-full p-2 hover:bg-white/10 transition duration-200 cursor-pointer">
        <BsThreeDots />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black">
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-center" disabled={!isAuth}>
          <button onClick={onDeleteReplyHandler} disabled={!isAuth}>
            Delete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ReplyMenu
