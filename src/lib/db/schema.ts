import {
  pgTable,
  serial,
  varchar,
  timestamp,
  inet,
  text,
  index,
} from "drizzle-orm/pg-core";

export const betaSignups = pgTable(
  "beta_signups",
  {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 255 }).notNull(),
    normalizedEmail: varchar("normalized_email", { length: 255 })
      .notNull()
      .unique(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
    ipAddress: inet("ip_address"),
    userAgent: text("user_agent"),
  },
  (table) => [
    index("idx_beta_signups_normalized_email").on(table.normalizedEmail),
    index("idx_beta_signups_created_at").on(table.createdAt.desc()),
  ]
);

export type BetaSignup = typeof betaSignups.$inferSelect;
export type NewBetaSignup = typeof betaSignups.$inferInsert;
