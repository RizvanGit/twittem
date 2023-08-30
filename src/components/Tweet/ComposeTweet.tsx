import { submitTweet } from "@/app/submit-tweet";
const ComposeTweet = () => {
  return (
    <form action={submitTweet} className="flex flex-col w-full">
      <input
        type="text"
        name="tweet"
        className="w-full h-full bg-transparent outline-none p-4 placeholder:text-xl placeholder:text-gray-600"
        placeholder="What's happening?"
      />
      <div className="w-full flex justify-between items-center">
        <div></div>
        <div className="w-full max-w-[100px]">
          <button className="py-1 text-lg font-bold w-full">Tweet</button>
        </div>
      </div>
    </form>
  );
};

export default ComposeTweet;
