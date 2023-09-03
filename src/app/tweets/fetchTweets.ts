"use server";
import { TweetType } from "@/types";
import { supabase } from "../supabase";

export default async function fetchTweets() {
  const { data, error } = await supabase
    .from("tweets")
    .select(
      `*,
          profiles ( 
    full_name,
    username)`,
    )
    .returns<TweetType[]>();
  if (error) {
    console.log("An error occurred: ", error);
  }
  return data;
}
