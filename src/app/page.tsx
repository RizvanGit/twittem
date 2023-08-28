import { LeftSideBar, Timeline, Explore, Login, AuthModal } from "@/components";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Unauthenticated from "./unauthenticated/page";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { data, error } = await supabase.auth.getUser();
  console.log("HOME, USER: ", data);
  let user: string = "";
  if (data) {
    user = data.user?.user_metadata.username;
  }
  return (
    <>
      <AuthModal isAuth={!!session} />
      <div className="flex flex-col items-center">
        <div className="w-full h-full flex justify-center items-center">
          <div className="max-w-screen-xl w-full h-full flex relative">
            <LeftSideBar />
            <main role="main" className="flex w-[990px] items-stretch  shrink">
              <div className="flex w-full min-h-full grow justify-between items-stretch gap-2">
                <Timeline user={user} />
                <Explore />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
