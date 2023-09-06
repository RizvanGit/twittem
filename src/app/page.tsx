import { LeftSideBar, Timeline, Explore, AuthModal } from "@/components";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(session?.user);
  return (
    <section>
      <AuthModal isAuth={!!session} />
      <div className="flex flex-col items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="max-w-screen-xl w-full h-full flex relative">
            <LeftSideBar />
            <main role="main" className="flex w-[990px] items-stretch  shrink">
              <div className="flex w-full min-h-full grow justify-between items-stretch gap-2">
                <Timeline user={session?.user} />
                <Explore />
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
