"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ILoginProps } from "@/types";
import { FC } from "react";

const Login: FC<ILoginProps> = ({ checkAuth }) => {
  return (
    <div className="relative">
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
              const value = e.target.value;
              if (value.trim().length < 4) {
                e.target.classList.remove("border-green-800");
                e.target.classList.add("border-red-800");
              } else if (e.target.value.length === 0) {
              } else {
                e.target.classList.remove("border-red-800");
                checkAuth(value);
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
          <Button formAction="/auth/logout">Logout</Button>
          {/* <button formAction="/auth/sign-up">Sign Up</button> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
