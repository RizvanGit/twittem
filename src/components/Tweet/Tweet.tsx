import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { BsChat, BsDot } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";
import { TweetProps } from "@/types";
import { LikeButton, TweetMenu } from "..";
import { getLikes } from "@/app/tweets/likeTweet";

dayjs.extend(relativeTime);

const Tweet = async ({ tweet, user }: TweetProps) => {
  const getTweetLikesCount = await getLikes(tweet.id);
  let count = getTweetLikesCount ? getTweetLikesCount.length : 0;
  let isLiked: boolean = false;
  const userId = user?.id;

  if (getTweetLikesCount) {
    if (user) {
      const currentTweet = getTweetLikesCount.find(
        (tweetData) =>
          tweet.id === tweetData.tweet_id && user.id === tweetData.user_id,
      );

      isLiked = user.id === currentTweet?.user_id;
    }
  }
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
        <div className="text-foreground text-sm font-normal mt-2">
          {tweet.text}
        </div>
        <div className="flex items-center justify-start space-x-10 w-full text-lg mt-2">
          <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
            <BsChat />
          </div>
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
  );
};

export default Tweet;
