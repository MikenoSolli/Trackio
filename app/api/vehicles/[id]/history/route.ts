import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { startOfDay, endOfDay, isSameDay } from "date-fns";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {

    const { id } = await params;

    const { searchParams } = new URL(req.url);
    const fromStr = searchParams.get("from");
    const toStr = searchParams.get("to");

    // 1. Validation
    if (!fromStr || !toStr) {
      return NextResponse.json({ error: "Missing date range" }, { status: 400 });
    }

    // 2. Fetch data from the Status table
    // Adjust 'vehicleId' and 'lastUpdate' to match your exact Prisma schema names
    const from = new Date(fromStr);
    const to = new Date(toStr);

    const isSingleDay = isSameDay(from, to);

    const history = await prisma.status.findMany({
      where: {
        vehicleId: id,
        lastUpdate: {
          gte: startOfDay((from)),
          lte: endOfDay((to)),
        },
      },
      orderBy: { lastUpdate: "asc" },
      // Optional: limit to 1000 points to keep the map performant
      take:100,
    });

    // 3. Format the data for the Leaflet Map
    const formattedHistory = history
      .filter(s => s.lastLat !== null && s.lastLng !== null)
      .map(s => ({
        pos: [s.lastLat as number, s.lastLng as number] as [number, number],
        time: s.lastUpdate.toISOString(),
      }));

    return NextResponse.json(formattedHistory, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      }
    });

  } catch (error) {
    console.error("History API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}