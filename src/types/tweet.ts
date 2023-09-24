import { Database } from "@/lib/database.types";
import { User } from "@supabase/supabase-js";

export type TweetType = Database["public"]["Tables"]["tweets"]["Row"] & {
  profiles: Pick<
    Database["public"]["Tables"]["profiles"]["Row"],
    "username" | "full_name"
  >;
} & {
  likes: Pick<
    Database["public"]["Tables"]["likes"]["Row"],
    "user_id" | "tweet_id"
  >;
};

export type ReplyType = Database["public"]["Tables"]["replies"]["Row"]

export type TweetProps = {
  tweet: TweetType;
  user: User | undefined;
};
