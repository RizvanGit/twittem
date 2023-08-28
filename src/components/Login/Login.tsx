import { ButtonPrime } from "..";

export default function Login() {
  return (
    <form
      action="/auth/login"
      method="post"
      className="flex flex-col p-2 space-y-2 w-full justify-center"
    >
      <div className="w-full">
        <label htmlFor="username" className="inline-block w-[15%]">
          Name
        </label>
        <input
          type="text"
          name="username"
          className="bg-gray-900 px-2 py-1 text-white font-bold w-[80%]"
        />
      </div>
      <div className="w-full">
        <label htmlFor="email" className="inline-block w-[15%]">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="bg-gray-900 px-2 py-1 text-white font-bold w-[80%]"
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
        <ButtonPrime
          isTwitterLogo={false}
          title="Sign in"
          className="px-5 py-2"
        />
        {/* <button formAction="/auth/sign-up">Sign Up</button> */}
      </div>
    </form>
  );
}
