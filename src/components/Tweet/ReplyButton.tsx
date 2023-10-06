"use client"
import React, { useState } from "react"
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

import { toast } from "sonner"

import { IReplyProps } from "@/types"
import { replyTweet } from "@/app/tweets"

dayjs.extend(relativeTime)

const ReplyButton = ({ tweet, userId }: IReplyProps) => {
  const [replyText, setReplyText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isReplyDialogOpen, setIsReplyDialogOpen] = useState(false)

  const onReplyHandler = async () => {
    setIsLoading(true)
    if (!replyText) {
      toast.error("Error. Message should not be empty")
      return
    } else if (!userId) {
      toast.error("Please log in to be able to reply")
      return
    }
    const result = await replyTweet(replyText, tweet.id, userId)
    setIsLoading(false)
    if (result.error) {
      toast.error("An error occurred while replying")
      return
    } else if (!result.isAuth) {
      toast.error("Authentification error occurred")
      return
    }
    toast.success("The reply has been sent")
    setIsReplyDialogOpen(false)

    setReplyText("")
  }
  return (
    <>
      <Dialog onOpenChange={setIsReplyDialogOpen} open={isReplyDialogOpen}>
        <DialogTrigger>
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <BsChat />
          </div>
        </DialogTrigger>
        <DialogContent className="bg-black sm:max-w2xl border-none text-white">
          <div className="border-b-[0.5px] border-gray-600 p-2 flex space-x-4 w-full">
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">@{tweet.profiles.username}</div>
                  <div>
                    <div>
                      <BsDot />
                    </div>
                  </div>
                  <div className="text-gray-500">
                    {dayjs(tweet.created_at).fromNow()}
                  </div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-white text-base w-full my-4">
                {tweet.text}
              </div>
            </div>
          </div>
          <div>
            <span className="italic text-gray-500">Replying to </span>
            <span className="not-italic">@{tweet.profiles.username}</span>
          </div>
          <div className="flex w-full items-center space-x-2">
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
            </div>
            <textarea
              value={replyText}
              name="reply"
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5px] border-gray-600 p-4 outline-none"
            />
          </div>
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button
                disabled={isLoading}
                onClick={() => onReplyHandler()}
                type="submit"
                className="rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200 font-bold"
              >
                Reply
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ReplyButton
