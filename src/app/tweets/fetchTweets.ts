"use server"
import { Database } from "@/lib/database.types"
import { TweetType } from "@/types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function fetchTweets() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data, error } = await supabase
    .from("tweets")
    .select("*, profiles(username, full_name)")
    .returns<TweetType[]>()
  if (error) {
    if (error instanceof Error) {
      console.log("An error occurred: ", error)
    }
    console.log("An error occurred: ")
  }
  return data
}
