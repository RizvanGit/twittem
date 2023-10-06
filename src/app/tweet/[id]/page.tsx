import { Tweet } from "@/components"
import { fetchReplies } from "@/app/tweets"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { Reply } from "./reply"

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  const { tweet, replies } = await fetchReplies(params.id)
  if (!tweet) {
    return <div>An error occurred while fetching tweet</div>
  }

  return (
    <section className="flex w-full max-w-[600px] h-full min-h-screen flex-col border-x-2 border-x-gray-700/60 p-4">
      <Tweet
        tweet={tweet[0]}
        user={session ? session.user : undefined}
        fromReplies={true}
      />
      <div>
        {replies.map((reply) => (
          <Reply
            key={reply.id}
            reply={reply}
            userId={session ? session.user.id : ""}
          />
        ))}
      </div>
    </section>
  )
}
