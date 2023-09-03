"use server";
import { randomUUID } from "crypto";
import { getUser, supabase } from "../supabase";

interface IResult {
  isAuth: boolean;
  isError: string | undefined;
}

export default async function likeTweet(id: string) {
  const { data: userData, error: userError } = await getUser();
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
  return result;
}
