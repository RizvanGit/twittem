"use server";
import { Database } from "@/lib/database.types";
import { tweets } from "@/lib/db/schema";
import { ReplyType, TweetType } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function fetchReplies(tweetId: string) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: dataTweet, error: errorTweet } = await supabase
    .from("tweets")
    .select("*, profiles(username, full_name)")
    .eq("id", tweetId)
    .returns<TweetType[]>();

    
    
  if (errorTweet) {
    if (errorTweet instanceof Error) {
      console.log("An error occurred: ", errorTweet);
    }
    console.log("An error occurred: ", errorTweet.message);
  }
  
  const {data: dataReplies, error: errorReplies} = await supabase
    .from("replies")
    .select("*, profiles(username)")
    .eq("tweet_id", tweetId)
    .returns<ReplyType[]>();
    
  console.log("REPLIES DATA: ", dataReplies)
  console.log("TWEET DATA: ", dataTweet)
  
  const response =  {
      tweet: dataTweet,
      replies: dataReplies ? dataReplies : []
  }
    
  return response;
  
}

export default fetchReplies
