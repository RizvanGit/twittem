"use client";
import { IAuthModalProps } from "@/types";
import { Dialog, DialogContent } from "../dialog";
import { Toaster, toast } from "sonner";
import { Login } from "@/components";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";

export default function AuthModal({ isAuth }: IAuthModalProps) {
  const [isOpen, setIsOpen] = useState(!isAuth);
  const supabase = createClientComponentClient<Database>();
  const checkValue = async (value: string) => {
    console.log("CHECK VALUE");
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
      <Toaster position="top-center" richColors />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="text-center">
          <h3>Please sign in to access all features</h3>
          <Login checkValue={checkValue} />
        </DialogContent>
      </Dialog>
    </>
  );
}
