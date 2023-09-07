import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { Database } from "@/lib/database.types";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const username = String(formData.get("username"));
  const supabase = createRouteHandlerClient<Database>({ cookies });

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      data: {
        username,
      },
    },
  });
  if (error) {
    console.error("An error occurred: ", error.message);
  }

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  });
}
