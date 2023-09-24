"use client"
import {FC, MouseEvent} from 'react'

import { BsDot } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import { LikeButton, ReplyButton, TweetMenu } from "..";
import { TweetProps } from '@/types';

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from 'next/navigation';

dayjs.extend(relativeTime);

interface ITweetClientProps extends TweetProps {
    count: number,
    userId: string | undefined,
    isLiked: boolean,
}
export const TweetClient: FC<ITweetClientProps> = ({count, isLiked, tweet, userId, user}) => {
    const router = useRouter()
    const onTweetClickHandler = (e: MouseEvent<HTMLDivElement>) => {
        router.push(`tweet/${tweet.id}`)
    }
    return (
    <>
    <div className="px-1 sm:px-4 py-2 border-b-2 border-b-gray-700/60 flex space-x-2 sm:space-x-4">
      <div className="sm:block hidden mt-1">
        <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex mt-2 items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="block sm:hidden w-10 h-10 bg-slate-200 rounded-full"></div>
            <div className="flex items-center sm:flex-row flex-col justify-start">
              <div className="font-bold">{tweet.profiles.username}</div>
            </div>
            <div className="text-gray-200/60">
              <BsDot />
            </div>
            <div className="text-sm text-secondary-foreground">
              {dayjs(tweet.created_at).fromNow()}
            </div>
          </div>
          <div className="relative">
            <TweetMenu
              userId={user ? user.id : ""}
              tweetAuthId={tweet.user_id}
            />
          </div>
        </div>
        <div
          onClick={onTweetClickHandler}
          className="text-foreground text-sm font-normal mt-2 cursor-pointer hover:bg-white/5 transition-all">
            {tweet.text}
        </div>
        <div className="flex items-center justify-start space-x-10 w-full text-lg mt-2">
          <ReplyButton tweet={tweet} userId={user ? user.id : ''}/>
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <AiOutlineRetweet />
          </div>
          <LikeButton
            tweetId={tweet.id}
            count={count}
            isLiked={isLiked}
            userId={userId}
          />
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <IoStatsChart />
          </div>
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <IoShareOutline />
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
