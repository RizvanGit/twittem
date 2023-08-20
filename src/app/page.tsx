import { LeftSideBar } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <section className="fixed w-[275px] flex flex-col h-screen items-stretch">
          <LeftSideBar />
        </section>
        <section></section>
        <section></section>
      </div>
    </div>
  );
}
