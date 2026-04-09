import { numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const realisasi = pgTable("realisasi", {
  id: serial("id").primaryKey(),
  kategori: text("kategori").notNull(),
  nilai: numeric("nilai", { precision: 20, scale: 2 }).notNull(),
  tahun: numeric("tahun", { precision: 4, scale: 0 }).notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});
