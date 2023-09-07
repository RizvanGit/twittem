"use client";
import { likeTweet } from "@/app/tweets";
import { removeLike } from "@/app/tweets/likeTweet";
import { FC, useState, useTransition } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "sonner";

interface ILikeButtonProps {
  tweetId: string;
  isLiked: boolean;
  count: number;
  userId: string | undefined;
}

const LikeButton: FC<ILikeButtonProps> = ({
  tweetId,
  count,
  isLiked,
  userId,
}) => {
  let [isLikePending, startTransition] = useTransition();
  const onLikeHandler = (id: string) => {
    startTransition(async () => {
      if (isLiked) {
        if (userId) {
          removeLike(tweetId, userId);
        }
      } else {
        const result = await likeTweet(id);
        if (!result.isAuth) {
          toast.error("Please, Log in");
        } else if (result.isError) {
          toast.error("Error while inserting data");
        } else {
        }
      }
    });
  };
  return (
    <button
      onClick={() => onLikeHandler(tweetId)}
      className="flex items-center space-x-1 rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200"
    >
      {isLiked ? <AiFillHeart className="text-red-400" /> : <AiOutlineHeart />}
      <div className="text-sm">{count > 0 ? count : null}</div>
    </button>
  );
};

export default LikeButton;
