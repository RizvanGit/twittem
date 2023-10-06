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
import { deleteTweet } from "@/app/tweets/deleteTweet"

interface ITweetMenuProps {
  tweetAuthId: string
  userId: string
  tweetId: string
  fromReplies: boolean
}

const TweetMenu: FC<ITweetMenuProps> = ({
  userId,
  tweetAuthId,
  tweetId,
  fromReplies,
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(userId === tweetAuthId)
  const onDeleteTweetHandler = () => {
    deleteTweet(tweetId, userId, fromReplies)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-secondary-foreground rounded-full p-2 hover:bg-white/10 transition duration-200 cursor-pointer">
        <BsThreeDots />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black">
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-center" disabled={!isAuth}>
          <button onClick={onDeleteTweetHandler} disabled={!isAuth}>
            Delete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default TweetMenu
