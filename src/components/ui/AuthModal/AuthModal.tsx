"use client";
import { IAuthModalProps } from "@/types";
import { Dialog, DialogContent } from "../dialog";
import { Login } from "@/components";
import { useState } from "react";

export default function AuthModal({ isAuth }: IAuthModalProps) {
  const [isOpen, setIsOpen] = useState(!isAuth);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="text-center">
        <h3>Please sign in to access all features</h3>
        <Login />
      </DialogContent>
    </Dialog>
  );
}
