"use client";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { FC, useState } from "react";

interface ITweetMenuProps {
  tweetAuthId: string;
  userId: string;
}

const TweetMenu: FC<ITweetMenuProps> = ({ userId, tweetAuthId }) => {
  const [isAuth, setIsAuth] = useState<boolean>(userId === tweetAuthId);
  console.log("Author: ", tweetAuthId, ". Current user: ", userId);
  console.log("Is auth: ", isAuth);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-secondary-foreground rounded-full p-2 hover:bg-white/10 transition duration-200 cursor-pointer">
        <BsThreeDots />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black">
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-center" disabled={!isAuth}>
          <button disabled={!isAuth}>Delete</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TweetMenu;
