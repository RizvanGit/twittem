import { LeftSideBar, Timeline, Explore } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSideBar />
        <main role="main" className="flex w-[990px] items-stretch  shrink">
          <div className="flex w-full min-h-full grow justify-between items-stretch gap-2">
            <Timeline />
            <Explore />
          </div>
        </main>
      </div>
    </div>
  );
}
