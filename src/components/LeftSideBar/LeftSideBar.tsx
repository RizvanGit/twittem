"use client";
import { FC } from "react";
import { NAVIGATION_ITEMS } from "@/constants";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import { ButtonPrime } from "..";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Button } from "../ui/button";
import { BiLogOut } from "react-icons/bi";

let currentWindowWidth: number = window.innerWidth;

interface ILeftSideBarProp {
  isAuth: boolean;
}

const LeftSideBar: FC<ILeftSideBarProp> = ({ isAuth }) => {
  const size = useWindowSize();
  let isWidthWide: boolean;
  if (size.width) {
    if (size.width > 1220) {
      isWidthWide = true;
    } else {
      isWidthWide = false;
    }
  } else {
    if (currentWindowWidth > 1220) {
      isWidthWide = true;
    } else {
      isWidthWide = false;
    }
  }
  return (
    <header
      role="banner"
      className={`relative flex flex-col h-screen shrink-0 items-stretch ${isWidthWide ? "w-[275px]" : "w-[75px]"
        }`}
    >
      <div
        className={`fixed flex flex-col justify-between top-0 h-full ${isWidthWide ? "w-[275px]" : "w-[75px]"
          }`}
      >
        <div className="flex flex-col w-full space-y-4 items-stretch mt-4">
          {NAVIGATION_ITEMS.map((item) => {
            return (
              <Link
                href={`/${item.title.toLowerCase()}`}
                key={item.title}
                className={`flex items-center w-fit justify-start ${isWidthWide ? "py-2 px-6" : "py-2 px-4 mx-auto"
                  } hover:bg-white/10 transition duration-200 rounded-3xl text-2xl space-x-4 `}
              >
                <div>
                  <item.icon />
                </div>
                {isWidthWide
                  ? item.title !== "Twittem" && <div>{item.title}</div>
                  : ""}
              </Link>
            );
          })}
          <ButtonPrime
            isTwitterLogo={isWidthWide ? false : true}
            className={`text-2xl ${isWidthWide ? "p-4 m-4" : "py-2 px-1 m-3"}`}
            title="Tweet"
          />
          {isAuth && (
            <form
              method="post"
              action="/auth/logout"
              className={`flex space-x-1 justify-center ${isWidthWide ? "text-center width-full" : ""
                }`}
            >
              <Button
                className={`rounded-full ${isWidthWide ? "bg-transparent" : ""
                  }`}
              >
                <BiLogOut />
                {isWidthWide && "Logout"}
              </Button>
            </form>
          )}
        </div>
        {isWidthWide && (
          <div className="flex justify-center">
            <a href="https://github.com/RizvanGit/twittem" className="flex items-center flex-grow space-x-2 m-4 rounded-full bg-transparent p-4 text-2xl text-center hover:bg-white/20 transition duration-200">
              <div className="rounded-full bg-slate-400 w-10 h-10"></div>
              <div className="text-left text-sm">
                <div className="font-semibold">Rizvan</div>
                <div className="text-gray-300">@RizvanGit</div>
              </div>
              <div className="grow flex justify-end">
                <BsThreeDots />
              </div>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default LeftSideBar;
