"use client"
import React from 'react'
import { BsChat } from "react-icons/bs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { IReplyProps } from '@/types';


const ReplyButton = ({tweet}: IReplyProps) => {
    const onReplyHandler = () => {
        console.log("FROM: ", tweet.profiles.username)
        console.log("Text: ", tweet.text)
    }
    return (
    
            <>
            <Dialog>
                <DialogTrigger>
                    <div onClick={() => onReplyHandler()} className="rounded-full hover:bg-white/10 p-2 cursor-pointer transition duration-200">
                        <BsChat />
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            </>
           )
}

export default ReplyButton
