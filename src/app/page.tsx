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
            <section className="w-[350px] flex flex-col space-y-4 right-0 mr-2 relative">
              <div className="w-full sticky top-0">
                <div className="relative">
                  <div className="min-h-[32px] h-[53px] mb-3">
                    <div className="absolute top-0 z-10 w-full rounded-xl mt-2">
                      <input
                        id="searchTwittem"
                        type="text"
                        placeholder="Search Twittem"
                        className="w-full h-full peer rounded-3xl py-3 px-10 outline-none bg-neutral-700/70 border-2 focus:border-primary/90 focus:shadow-b focus:bg-transparent border-transparent"
                      />
                      <label
                        htmlFor="searchTwittem"
                        className="absolute top-0 left-0 text-gray-400 peer-focus:text-primary h-full flex items-center pl-3 justify-center"
                      >
                        <BsSearch className="w-5 h-5" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-xl bg-neutral-700/70 p-4 my-4">
                  <h3 className="font-bold text-2xl">What{`'`}s happening?</h3>
                  <div>
                    {Array.from({ length: 5 }).map((_, i) => {
                      return <div key={i + 100}>Trendind {i}</div>;
                    })}
                  </div>
                </div>
                <div></div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
