"use server";

import { SignJWT, JWTPayload, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.SESSION_SECRET || "fallback-secret-key-change-in-production";
const encodedKey = new TextEncoder().encode(secretKey);

const SESSION_DURATION = 60 * 60 * 1000; // 1 hour in ms

export async function encrypt(payload: JWTPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(encodedKey);
}

export async function decrypt(session: string) {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        return null;
    }
}

export async function createSession(userId: Number, userRole: string) {
    const expiresAt = new Date(Date.now() + SESSION_DURATION);
    const session = await encrypt({ userId, userRole, expiresAt });
    const cookieStore = await cookies();

    cookieStore.set("session", session, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        expires: expiresAt,
    });
}

export async function refreshSession() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session")?.value;
    if (!sessionToken) return null;

    const payload = await decrypt(sessionToken);
    if (!payload) return null;

    // Reissue with a fresh expiry
    const expiresAt = new Date(Date.now() + SESSION_DURATION);
    const newSession = await encrypt({ 
        userId: payload.userId, 
        userRole: payload.userRole, 
        expiresAt 
    });

    cookieStore.set("session", newSession, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        expires: expiresAt,
    });

    return { userId: payload.userId, userRole: payload.userRole, expiresAt };
}

export async function getSession() {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session")?.value;
    if (!sessionToken) return null;

    const payload = await decrypt(sessionToken);
    return payload;
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete("session");
}