"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { getUser } from "../supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";

export async function replyTweet(replyText: string, tweetId: string, userId: string) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const user = await getUser({reply: replyText});

  if (!user.data.user || user.error) {
    return user;
  }
  if (!replyText) {
    return user;
  }
  
  const { data, error } = await supabase.from("replies").insert({
    user_id: userId,
    tweet_id: tweetId,
    text: replyText,
    id: randomUUID(),
  });
  console.log("DATA REPLY: ", data)
  console.log("ERROR REPLY", error)
  revalidatePath("/");
  return user;
}
