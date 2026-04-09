import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { realisasi } from "@/lib/db/schema";

export async function GET() {
  try {
    const currentYear = new Date().getFullYear();

    const result = await db
      .select({
        total: sql<string>`COALESCE(SUM(${realisasi.nilai}), 0)`,
      })
      .from(realisasi)
      .where(sql`${realisasi.tahun} = ${currentYear}`);

    const total = result[0]?.total ?? "0";

    return NextResponse.json({ total });
  } catch (error) {
    console.error("Failed to fetch realisasi:", error);
    return NextResponse.json(
      { error: "Failed to fetch realisasi data" },
      { status: 500 }
    );
  }
}
