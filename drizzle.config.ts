import type { Config } from "drizzle-kit";

export default {
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
      connectionString: "postgresql://postgres:[D@UTD#p$a9A6zDG]@db.mjafiooasrllxebgasoa.supabase.co:5432/postgres"
  }
} satisfies Config;
