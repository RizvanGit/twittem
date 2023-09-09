"use client";
import { IAuthModalProps } from "@/types";
import { Dialog, DialogContent } from "../dialog";
import { Toaster, toast } from "sonner";
import { Login } from "@/components";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

export default function AuthModal({ isAuth }: IAuthModalProps) {
  console.log("isAuth PROP: ", isAuth);
  const [isOpen, setIsOpen] = useState(!isAuth);
  const supabase = createClientComponentClient<Database>();
  const checkAuth = async (value: string) => {
    const { data, error } = await supabase
      .from("profiles")
      .select()
      .eq("username", value);
    if (data && data?.length > 0) {
      toast("User founded. You can login");
    } else {
      toast("No such user, you can sign up");
    }
  };
  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="text-center">
          <div className="flex flex-col space-y-1">
            <h2>Please sign in to access all features</h2>
            <p className="text-sm text-gray-300 italic">
              Receive a email with a link to log in
            </p>
          </div>
          <Login checkAuth={checkAuth} />
        </DialogContent>
      </Dialog>
    </>
  );
}
