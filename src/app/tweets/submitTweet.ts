"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { getUser } from "../supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";

export async function submitTweet(formData: FormData) {
  const tweet = formData.get("tweet");
  const supabase = createServerComponentClient<Database>({ cookies });
  const user = await getUser({ tweet: tweet?.toString() });

  if (!user.data.user || user.error) {
    return user;
  }
  if (!tweet) {
    return user;
  }
  const { data, error } = await supabase.from("tweets").insert({
    user_id: user.data.user.id,
    text: tweet?.toString(),
    id: randomUUID(),
  });
  formData.set("tweet", "");
  revalidatePath("/");
  return user;
}
