"use server";

import { SignJWT, JWTPayload, jwtVerify } from "jose";
import {cookies } from "next/headers";

const sectretKey =process.env.SESSION_SECRET || "fallback-secret-key-change-in-production";

const encoddedKey = new TextEncoder().encode(sectretKey);


export async function encrypt(payload: JWTPayload){
    return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(encoddedKey);
}

export async function decrypt(session: string) {
    try{
        const { payload } = await jwtVerify(session, encoddedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.error("Session decryption failed:", error);
        return null;
    }
        }

export async function createSession(userId: string, userRole: string) {
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    const session= await encrypt({userId, userRole, expiresAt});
    const cookieStore = await cookies();

    cookieStore.set("session", session, {
        httpOnly: true,
        secure:true,
        sameSite: "lax",
        path: "/",
        expires: expiresAt,
    }
    );
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session")?.value;

  if (!sessionToken) return null;

  const payload = await decrypt(sessionToken);
  return payload; // This contains userId and userRole
}

export async function deleteSession() {
  const cookieStore = await cookies();
  
  // This effectively tells the browser to expire the cookie immediately
  cookieStore.delete("session");
}
    

