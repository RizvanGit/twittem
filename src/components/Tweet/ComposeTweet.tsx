"use client";

import { submitTweet } from "@/app/submit-tweet";
import { useState } from "react";
import { Toaster, toast } from "sonner";

const ComposeTweet = () => {
  const [value, setValue] = useState<string>("");
  return (
    <>
      <Toaster richColors />
      <form
        action={(e) => {
          submitTweet(e).then((res) => {
            if (!res.isAuth) {
              toast.error("Sign In to be able to tweet a message!");
            } else if (!res.isMessage) {
              toast.error("You cant't tweet an empty message!");
            } else if (res.isError) {
              toast.error(res.isMessage);
            } else {
              toast.success("Tweet has been added!");
            }
          });

          setValue("");
        }}
        className="flex flex-col w-full"
      >
        <input
          type="text"
          name="tweet"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full h-full bg-transparent outline-none p-4 placeholder:text-xl placeholder:text-gray-600"
          placeholder="What's happening?"
        />
        <div className="w-full flex justify-between items-center">
          <div></div>
          <div className="w-full max-w-[100px]">
            <button className="py-1 text-lg font-bold w-full rounded-full flex items-center text-white justify-center bg-primary text-center hover:bg-primary/90 transition duration-200">
              Tweet
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ComposeTweet;
