import { NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { vehicleId, state } = data;
    
    // Quick validation
    if (!vehicleId || isNaN(parseFloat(data.fuelLevel))) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const cacheKey = `tractor:last_state:${vehicleId}`;

    // 1. GET PREVIOUS STATE from Redis (Replaces prisma.status.findFirst)
    const prevRaw = await redis.get(cacheKey);
    const previous = prevRaw ? JSON.parse(prevRaw) : null;

    // 2. UPDATE CACHE IMMEDIATELY for the next ping
    const current = {
      ...data,
      fuelLevel: parseFloat(data.fuelLevel),
      lastLat: parseFloat(data.lastLat),
      lastLng: parseFloat(data.lastLng),
      timestamp: new Date().toISOString()
    };
    await redis.set(cacheKey, JSON.stringify(current));

    // 3. QUEUE FOR WORKER (ABCD: Archive, Alerts, Summary)
    await redis.rpush("telemetry_queue", JSON.stringify({ current, previous }));

    // 4. LIVE MAP BROADCAST (D)
    await redis.publish("live_map_updates", JSON.stringify(current));

    return NextResponse.json({ message: "Ping Buffered" }, { status: 202 });

  } catch (error) {
    console.error("Ingest Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}