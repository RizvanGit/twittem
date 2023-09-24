import { TweetProps } from "@/types";
import { getLikes } from "@/app/tweets/likeTweet";
import { TweetClient } from "./TweetClient";

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

  return <TweetClient count={count} userId={userId} tweet={tweet} user={user} isLiked={isLiked}/>;
};

export default Tweet;
