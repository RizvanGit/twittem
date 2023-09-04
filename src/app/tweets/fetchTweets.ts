"use server";
import { Database } from "@/lib/database.types";
import { TweetType } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function fetchTweets() {
  const supabase = createServerComponentClient<Database>({ cookies });
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
