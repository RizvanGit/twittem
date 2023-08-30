"use server";
import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";

import type { Database } from "@/lib/database.types";

export default async function NewTweet() {
  const addTweet = async (formData: FormData) => {
    const tweet = formData.get("tweet");
    const supabase = createServerActionClient<Database>({ cookies });
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      return;
    }
    await supabase.from("todos").insert({
      user_id: userData.user.id,
      text: tweet?.toString(),
    });

    revalidatePath("/");
  };

  return (
    <form action={addTweet}>
      <input name="title" />
    </form>
  );
}
