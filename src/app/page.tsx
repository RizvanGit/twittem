import { LeftSideBar, Timeline, Search } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <main role="main" className="flex w-[990px] items-stretch  shrink">
          <div className="flex w-full min-h-full grow justify-between items-stretch gap-2">
            <Timeline />
            <section className="w-[350px] space-y-4 mr-2 hidden lg:flex lg:flex-col">
              <div className="relative">
                <div className="sticky top-0">
                  <div className="min-h-[32px] h-[53px] mb-3 relative">
                    <Search className="fixed top-0 z-20 mt-2" />
                  </div>
                </div>
                <div className="flex flex-col rounded-xl bg-neutral-800/70 my-4">
                  <h3 className="font-bold text-2xl my-2 py-2 px-3">
                    What{`'`}s happening?
                  </h3>
                  <div>
                    {Array.from({ length: 5 }).map((_, i) => {
                      return (
                        <div
                          key={i + 100}
                          className="hover:bg-white/10 p-3 last:rounded-b-xl transition duration-150"
                        >
                          <div className="font-bold text-lg">
                            #trending {i + 1}
                          </div>
                          <div className="text-xs text-neutral-400">30.2k</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col rounded-xl bg-neutral-800/70 my-4">
                  <h3 className="font-bold text-2xl my-2 py-2 px-3">
                    Who to follow?
                  </h3>
                  <div>
                    {Array.from({ length: 5 }).map((_, i) => {
                      return (
                        <div
                          key={i + 200}
                          className="flex items-center gap-2 cursor-pointer hover:bg-white/10 p-3 last:rounded-b-xl transition duration-150"
                        >
                          <div className="h-10 w-10 bg-neutral-600 rounded-full"></div>
                          <div className="flex flex-col">
                            <div>Other user</div>
                            <div className="text-sm text-gray-400">
                              @otheruser2331
                            </div>
                          </div>
                          <div className="flex justify-end grow">
                            <button className="rounded-full px-6 py-2 bg-white text-neutral-900">
                              Follow
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
