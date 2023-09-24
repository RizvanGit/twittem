import { ReplyMenu } from '@/components'
import { ReplyType } from '@/types'
import React from 'react'
import { BsDot } from 'react-icons/bs'

interface IReplyProps {
    reply: ReplyType,
    userId: string,
}

export const Reply = ({reply, userId}: IReplyProps) => {
    
    return (
    <div className="px-1 sm:px-4 py-2 border-b-2 border-b-gray-700/60 flex space-x-2 sm:space-x-4">
      <div className="sm:block hidden mt-1">
        <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex mt-2 items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="block sm:hidden w-10 h-10 bg-slate-200 rounded-full"></div>
            <div className="flex items-center sm:flex-row flex-col justify-start">
              <div className="font-bold">{reply.profiles.username}</div>
            </div>
            <div className="text-gray-200/60">
              <BsDot />
            </div>
          </div>
          <div className="relative">
            <ReplyMenu
              userId={userId}
              replyAuthId={reply.user_id}
              replyId={reply.id}
            />
          </div>
        </div>
        <div
          className="text-foreground text-sm font-normal mt-2 cursor-pointer hover:bg-white/5 transition-all">
            {reply.text}
        </div>
      </div>
    </div>
    )
}
