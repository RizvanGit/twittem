"use server"
import { Database } from "@/lib/database.types"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function deleteReply(replyId: string, userId: string) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data, error } = await supabase
    .from("replies")
    .delete()
    .eq("id", replyId)
    .eq("user_id", userId)

  revalidatePath("/")
  if (error) {
    console.log("An error occurred while deleting tweet")
  }
}
