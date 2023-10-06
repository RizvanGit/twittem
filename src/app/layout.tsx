import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { LeftSideBar, Explore, AuthModal } from "@/components"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Twittem",
  description: "Messenger on top of NextJS",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <section>
          <AuthModal isAuth={!!session} />
          <div className="flex flex-col items-center">
            <div className="w-full h-full flex justify-center items-center">
              <div className="max-w-screen-xl w-full h-full flex relative">
                <LeftSideBar isAuth={!!session} />
                <main
                  role="main"
                  className="flex w-[990px] items-stretch  shrink"
                >
                  <div className="flex w-full min-h-full grow justify-between items-stretch gap-2">
                    {children}
                    <Explore />
                  </div>
                </main>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}
