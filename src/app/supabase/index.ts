import { Database } from "@/lib/database.types";
import {
  User,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { AuthError } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export const supabase = createServerComponentClient<Database>({ cookies });

interface IResult {
  data: {
    user: User | null;
  };
  error: AuthError | null;
  isAuth: boolean;
  isError: string | undefined;
  isMessage?: boolean;
}

export async function getUser(tweet: string = "") {
  const { data, error } = await supabase.auth.getUser();
  const result: IResult = {
    data,
    error,
    isAuth: !!data.user,
    isError: error?.message,
    isMessage: !!tweet,
  };

  return result;
}
