import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { realisasi } from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const globalForDb = globalThis as unknown as {
  pgClient: postgres.Sql | undefined;
};

const client = globalForDb.pgClient ?? postgres(connectionString);

if (process.env.NODE_ENV !== "production") {
  globalForDb.pgClient = client;
}

export const db = drizzle(client, { schema: { realisasi } });
