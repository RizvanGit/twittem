"use client";
import { likeTweet } from "@/app/tweets";
import { FC, useState, useTransition } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "sonner";

interface ILikeButtonProps {
  tweetId: string;
  isLiked: boolean;
  count: number;
}

const LikeButton: FC<ILikeButtonProps> = ({ tweetId, count, isLiked }) => {
  let [isLikePending, startTransition] = useTransition();

  const onLikeHandler = (id: string) => {
    startTransition(() => {
      const result = likeTweet(id);
      result.then((res) => {
        if (!res.isAuth) {
          toast.error("Please, Log in");
        } else if (res.isError) {
          toast.error("Error while inserting data");
        } else {
        }
      });
    });
  };
  return (
    <button
      onClick={() => onLikeHandler(tweetId)}
      className="flex items-center space-x-1 rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200"
    >
      <AiOutlineHeart className={`${isLiked ? "text-red-400" : ""}`} />
      <div className="text-sm">{count > 0 ? count : null}</div>
    </button>
  );
};

export default LikeButton;
