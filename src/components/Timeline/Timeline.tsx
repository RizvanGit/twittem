"use client";
import { FC } from "react";
import { ButtonPrime, Search } from "@/components";
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

const Timeline: FC = () => {
  return (
    <section className="flex w-full max-w-[600px] h-full min-h-screen flex-col border-x-2 border-x-gray-700/60">
      <div className="sticky top-0">
        <h1
          onClick={() => window.scrollTo({ top: 0 })}
          className="text-xl font-bold p-4 backdrop-blur cursor-pointer bg-black/10"
        >
          Home
        </h1>
        <Search className="absolute top-0 right-0 lg:hidden my-1 mr-1 w-[250px]" />
      </div>
      <div className="flex items-stretch p-4 space-x-2 border-y-2 border-y-gray-700/60">
        <div className="h-10 w-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            className="w-full h-full bg-transparent outline-none p-4 placeholder:text-xl placeholder:text-gray-600"
            placeholder="What's happening?"
          />
          <div className="w-full flex justify-between items-center">
            <div></div>
            <div className="w-full max-w-[100px]">
              <ButtonPrime
                isTwitterLogo={false}
                title="Tweet"
                className="py-1 text-lg font-bold w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="px-1 sm:px-4 py-2 border-b-2 border-b-gray-700/60 flex space-x-2 sm:space-x-4"
          >
            <div className="sm:block hidden mt-1">
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-2 items-center justify-between">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="block sm:hidden w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div className="flex items-center sm:flex-row sm:space-x-2 flex-col justify-start">
                    <div className="font-bold">Club of Coders</div>
                    <div className="text-sm text-secondary-foreground">
                      @clubofcoders
                    </div>
                  </div>
                  <div className="text-gray-200/60">
                    <BsDot />
                  </div>
                  <div className="text-sm text-secondary-foreground">
                    2 hours ago
                  </div>
                </div>
                <div className="text-secondary-foreground rounded-full p-2 hover:bg-white/10 transition duration-200 cursor-pointer">
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-foreground text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip
                amet voluptate voluptate dolor minim nulla est proident. Nostrud
                officia pariatur ut officia. Sit irure elit esse ea nulla sunt
                ex occaecat reprehenderit commodo officia dolor Lorem duis
                laboris cupidatat officia voluptate.
              </div>
              <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
              <div className="flex items-center justify-start space-x-10 w-full text-lg mt-2">
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
                  <BsChat />
                </div>
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
                  <AiOutlineHeart />
                </div>
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
                  <IoStatsChart />
                </div>
                <div className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
                  <IoShareOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
