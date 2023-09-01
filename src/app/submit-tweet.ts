"use server";

import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function submitTweet(formData: FormData) {
  const tweet = formData.get("tweet");
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (!tweet || userError) {
    return;
  }
  const { data, error } = await supabase.from("tweets").insert({
    user_id: userData.user.id,
    text: tweet?.toString(),
    id: randomUUID(),
  });
  formData.set("tweet", "");
  revalidatePath("/");
}

{
  /*
  console.log("TWEET: ", tweet);
  if (error) {
    console.log("insert response ERROR: ", error);
  }
  if (data) {
    console.log("insert response DATA: ", data);
  }
  if (userError) {
    console.error(userError);
    return;
  }
    */
}
