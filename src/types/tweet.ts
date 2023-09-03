import { Database } from "@/lib/database.types";

export type TweetType = Database["public"]["Tables"]["tweets"]["Row"] & {
  profiles: Pick<
    Database["public"]["Tables"]["profiles"]["Row"],
    "username" | "full_name"
  >;
};

export type TweetProps = {
  tweet: TweetType;
};
