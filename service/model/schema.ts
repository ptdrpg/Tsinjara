import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const UserTable = sqliteTable("user", {
  id: text("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email").notNull(),
  password: text("password").notNull(),
})

export const ChanelTable = sqliteTable("chanel", {
  id: text("id").primaryKey(),
  label: text("label").notNull(),
  owner_id: text("owner_id").notNull().references(() => UserTable.id),
  created_at: integer("created_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch() * 1000)`),
  updated_at: integer("updated_at", { mode: "timestamp" }).notNull().default(sql`(unixepoch() * 1000)`),
})


