import { Explore, LeftSideBar, Tweet } from "@/components"
import { fetchReplies } from "@/app/tweets"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page({
  params,
}: {
  params: { id: string }
}) {

  const supabase = createServerComponentClient({ cookies });
  
  const {
    data: { session },
  } = await supabase.auth.getSession();
    const {tweet, replies} = await fetchReplies(params.id)
    console.log("Replies: ", replies)
    
  return (
  
    <section className="flex w-full max-w-[600px] h-full min-h-screen flex-col border-x-2 border-x-gray-700/60 p-4">
       <Tweet tweet={tweet} user={session ? session.user : undefined}/>
       <h3>{replies.map(reply => <div key={reply.id}>{reply.text}</div>)}</h3>
    </section>
  )
}


