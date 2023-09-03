import { ButtonPrime, Search, ComposeTweet, Tweet } from "@/components";
import fetchTweets from "@/app/tweets/fetchTweets";
import { Toaster } from "sonner";

const Timeline = async () => {
  const tweets = await fetchTweets();

  return (
    <section className="flex w-full max-w-[600px] h-full min-h-screen flex-col border-x-2 border-x-gray-700/60">
      <div className="sticky top-0">
        <div className="flex items-stretch justify-between">
          <h1 className="text-xl font-bold p-4 w-full backdrop-blur cursor-pointer bg-black/10">
            Home
          </h1>
        </div>
        <Search
          id="searchTimeline"
          className="absolute top-0 right-0 lg:hidden my-1 mr-1 w-[250px]"
        />
      </div>
      <div className="flex items-stretch p-4 space-x-2 border-y-2 border-y-gray-700/60">
        <div className="h-10 w-10 bg-slate-400 rounded-full flex-none"></div>
        <Toaster position="top-center" />
        <ComposeTweet />
      </div>
      <div className="flex flex-col">
        {tweets &&
          tweets
            .reverse()
            .map((tweet) => <Tweet key={tweet.id} tweet={tweet} />)}
      </div>
    </section>
  );
};

export default Timeline;
