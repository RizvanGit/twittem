import { FC } from "react"
import { Search, User } from ".."

const Explore: FC = () => {
  return (
    <section className="w-[350px] space-y-4 mr-2 hidden lg:flex lg:flex-col relative text-light">
      <div className="sticky bottom-0 w-full">
        <div className="min-h-[32px] h-[53px] mb-3 relative">
          <Search
            id="searchExplorer"
            className="fixed top-0 z-30 mt-2 w-[350px]"
          />
        </div>
        <div className="flex flex-col rounded-xl bg-backgoundtransparent my-4">
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
                  <div className="font-bold text-lg">#trending {i + 1}</div>
                  <div className="text-xs text-secondary-foreground">30.2k</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex flex-col rounded-xl bg-backgoundtransparent my-4">
          <h3 className="font-bold text-2xl my-2 py-2 px-3">Who to follow?</h3>
          <div>
            {Array.from({ length: 5 }).map((_, i) => {
              return (
                <User
                  key={i + 200}
                  fullname="Some user"
                  login="@someuser3331"
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore
