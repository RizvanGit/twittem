"use server";

import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { AuthError } from "@supabase/supabase-js";

interface IResult {
  isAuth: boolean;
  isError: string | undefined;
  isMessage: boolean;
}

export async function submitTweet(formData: FormData) {
  const tweet = formData.get("tweet");
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: userData, error: userError } = await supabase.auth.getUser();
  console.log("USER DATA: ", userData);
  const result: IResult = {
    isAuth: !!userData.user,
    isError: userError?.message,
    isMessage: !!tweet,
  };
  if (!userData || userError) {
    return result;
  }
  if (!tweet) {
    return result;
  }
  const { data, error } = await supabase.from("tweets").insert({
    user_id: userData.user.id,
    text: tweet?.toString(),
    id: randomUUID(),
  });
  formData.set("tweet", "");
  revalidatePath("/");
  return result;
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
