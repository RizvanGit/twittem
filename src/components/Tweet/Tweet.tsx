"use client";
import { FC, useTransition } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { likeTweet } from "@/app/tweets";

import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import { TweetProps } from "@/types";
import { toast } from "sonner";

dayjs.extend(relativeTime);

const Tweet: FC<TweetProps> = ({ tweet }) => {
  let [isLikePending, startTransition] = useTransition();

  const onLikeHandler = (id: string) => {
    startTransition(() => {
      const result = likeTweet(id);
      result.then((res) => {
        console.log("LIKE TWEET RETURN ReS: ", res);
        if (!res.isAuth) {
          toast.error("Please, Log in");
        }
        if (res.isError) {
          toast.error("Error while inserting data");
        }
      });
    });
  };
  return (
    <div className="px-1 sm:px-4 py-2 border-b-2 border-b-gray-700/60 flex space-x-2 sm:space-x-4">
      <div className="sm:block hidden mt-1">
        <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex mt-2 items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="block sm:hidden w-10 h-10 bg-slate-200 rounded-full"></div>
            <div className="flex items-center sm:flex-row sm:space-x-2 flex-col justify-start">
              <div className="font-bold">{tweet.profiles.full_name ?? ""}</div>
              <div className="text-sm text-secondary-foreground">
                {tweet.profiles.username}
              </div>
            </div>
            <div className="text-gray-200/60">
              <BsDot />
            </div>
            <div className="text-sm text-secondary-foreground">
              {dayjs(tweet.created_at).fromNow()}
            </div>
          </div>
          <div className="text-secondary-foreground rounded-full p-2 hover:bg-white/10 transition duration-200 cursor-pointer">
            <BsThreeDots />
          </div>
        </div>
        <div className="text-foreground text-sm font-normal mt-2">
          {tweet.text}
        </div>
        <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
        <div className="flex items-center justify-start space-x-10 w-full text-lg mt-2">
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <BsChat />
          </div>
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <AiOutlineRetweet />
          </div>
          <button
            onClick={() => onLikeHandler(tweet.id)}
            className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200"
          >
            <AiOutlineHeart />
          </button>
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <IoStatsChart />
          </div>
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <IoShareOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
