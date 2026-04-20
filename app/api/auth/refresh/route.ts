import { NextResponse } from "next/server";
import { refreshSession, getSession } from "@/app/_lib/sessions";

export async function POST() {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: "No session" }, { status: 401 });
        }

        const refreshed = await refreshSession();
        if (!refreshed) {
            return NextResponse.json({ error: "Refresh failed" }, { status: 401 });
        }

        return NextResponse.json({ 
            success: true,
            expiresAt: refreshed.expiresAt 
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ valid: false }, { status: 401 });
        }

        const expiresAt = session.expiresAt as string;
        const timeLeft = new Date(expiresAt).getTime() - Date.now();

        return NextResponse.json({ 
            valid: true,
            expiresAt,
            timeLeft, // ms remaining
        });
    } catch (error) {
        return NextResponse.json({ valid: false }, { status: 401 });
    }
}