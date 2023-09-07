import { Database } from "@/lib/database.types";
import {
  User,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { AuthError } from "@supabase/supabase-js";
import { cookies } from "next/headers";

interface IResult {
  data: {
    user: User | null;
  };
  error: AuthError | null;
  isAuth: boolean;
  isError: string | undefined;
  isMessage?: boolean;
  isLiked?: boolean;
}

interface IGetUserArghs {
  tweet?: string;
}

export async function getUser({ tweet }: IGetUserArghs) {
  const supabase = createServerComponentClient<Database>({ cookies });
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
