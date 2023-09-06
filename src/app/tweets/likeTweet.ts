"use server";
import { randomUUID } from "crypto";
import { getUser } from "../supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

interface IResult {
  isAuth: boolean;
  isError: string | undefined;
}

export default async function likeTweet(id: string) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: userData, error: userError } = await getUser({});
  const result: IResult = {
    isAuth: !!userData.user,
    isError: userError?.message,
  };

  if (!userData || !userData.user) {
    return result;
  }
  const { data, error } = await supabase.from("likes").insert({
    id: randomUUID(),
    user_id: userData.user.id,
    tweet_id: id,
  });
  revalidatePath("/");
  return result;
}

export async function getLikes(tweetId: string) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: likesData, error: likesError } = await supabase
    .from("likes")
    .select("*")
    .eq("tweet_id", tweetId);
  if (!likesData || likesError || likesData.length === 0) {
    return null;
  }
  return likesData;
}
