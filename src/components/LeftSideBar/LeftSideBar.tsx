import { FC, Fragment } from "react";
import { NAVIGATION_ITEMS } from "@/constants";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";

const LeftSideBar: FC = () => {
  return (
    <Fragment>
      <div className="flex flex-col h-full space-y-4 items-stretch mt-4">
        {NAVIGATION_ITEMS.map((item) => {
          return (
            <Link
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
              className="flex items-center w-fit justify-start hover:bg-white/10 transition duration-200 rounded-3xl py-2 px-6 text-2xl space-x-4"
            >
              <div>
                <item.icon />
              </div>
              {item.title !== "Twittem" && <div>{item.title}</div>}
            </Link>
          );
        })}
        <button className="m-4 rounded-full bg-primary p-4 text-2xl text-center hover:bg-opacity-80 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="flex items-center flex-grow space-x-2 m-4 rounded-full bg-transparent p-4 text-2xl text-center hover:bg-white/20 transition duration-200">
        <div className="rounded-full bg-slate-400 w-10 h-10"></div>
        <div className="text-left text-sm">
          <div className="font-semibold">Club of Coders</div>
          <div className="text-gray-300">@Clubofcoders</div>
        </div>
        <div className="grow flex justify-end">
          <BsThreeDots />
        </div>
      </button>
    </Fragment>
  );
};

export default LeftSideBar;
