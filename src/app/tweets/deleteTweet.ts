"use server"
import { Database } from "@/lib/database.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function deleteTweet(tweetId: string, userId: string, fromReplies?: boolean) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {data, error } = await supabase
    .from("tweets")
    .delete()
    .eq("id", tweetId)
    .eq("user_id", userId);
    
  if(fromReplies){
      redirect('/')
      return;
  }
    
    revalidatePath("/");
  if (error) {
    console.log("An error occurred while deleting tweet");
  }
}
