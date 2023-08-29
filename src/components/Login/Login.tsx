"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { ButtonPrime } from "..";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Toaster, toast } from "sonner";
import { Database } from "@/lib/database.types";

export default function Login() {
  const supabase = createClientComponentClient<Database>();

  return (
    <div className="relative">
      <Toaster position="top-left" richColors />
      <form
        action="/auth/login"
        method="post"
        className="flex flex-col p-2 space-y-2 w-full justify-center"
      >
        <div>
          <Input
            placeholder="Username"
            type="text"
            name="username"
            min="3"
            onBlur={async (e) => {
              if (
                e.target.value.trim().length < 4 &&
                e.target.value.length !== 0
              ) {
                e.target.classList.remove("border-green-800");
                e.target.classList.add("border-red-800");
              } else if (e.target.value.length === 0) {
              } else {
                e.target.classList.remove("border-red-800");
                const { data, error } = await supabase
                  .from("profiles")
                  .select()
                  .eq("username", e.target.value);
                if (data && data?.length > 0) {
                  toast.success("User founded");
                } else {
                  toast("No such user, you can sign up");
                }
              }
            }}
          />
        </div>

        <div>
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onBlur={(e) => {
              const value = e.target.value;
              if (value.includes("@") && value.length > 3) {
                e.target.classList.remove("border-red-800");
                e.target.classList.add("border-green-800");
              } else {
                e.target.classList.remove("border-green-800");
                e.target.classList.add("border-red-800");
              }
            }}
          />
        </div>
        {/* <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="bg-gray-900 text-white font-bold"
        />
      </div> */}
        <div className="space-x-2 flex justify-center">
          <Button>Login</Button>
          <Button formAction="/auth/sign-up">Sign up</Button>
          <Button formAction="/auth/logout">Logout</Button>
          {/* <button formAction="/auth/sign-up">Sign Up</button> */}
        </div>
      </form>
    </div>
  );
}
