import { integer, pgTable, varchar, serial } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  // Use serial for a conventional autoincrement PK
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
});
