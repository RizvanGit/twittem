import { LeftSideBar, Timeline } from "@/components";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <main role="main" className="flex w-[990px] items-stretch  shrink grow">
          <div className="flex w-full min-h-full grow justify-between items-stretch gap-2">
            <Timeline />
            <section className="w-[350px] h-screen flex flex-col space-y-4 right-0 mr-2 relative">
              <div className="z-20 w-full sticky top-0">
                <div className="relative">
                  <div className="min-h-[32px] h-[53px] mb-3">
                    <div className="fixed top-0 z-10 w-full rounded-xl p-5">
                      <label
                        htmlFor="searchTwittem"
                        className="absolute top-0 left-0 h-full flex items-center"
                      >
                        <BsSearch className="w-5 h-5 text-gray-400 " />
                      </label>
                      <input
                        id="searchTwittem"
                        type="text"
                        placeholder="Search Twittem"
                        className="w-full h-full rounded-xl py-1 px-2 outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
