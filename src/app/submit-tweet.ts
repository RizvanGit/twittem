"use server";

import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";

export async function submitTweet(formData: FormData) {
  const tweet = formData.get("tweet");
  console.log("TWEET: ", tweet);
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (!tweet) {
    console.log("Message is empty");
    return;
  }
  if (userError) {
    console.error(userError);
    return;
  }

  const { data, error } = await supabase.from("tweets").insert({
    user_id: userData.user.id,
    text: tweet?.toString(),
    id: randomUUID(),
  });
  console.log("insert response DATA: ", data);
  console.log("insert response ERROR: ", error);
}
//2-39-00
