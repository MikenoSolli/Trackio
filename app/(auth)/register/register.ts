// app/actions/register.ts
"use server";

import { prisma } from "@/lib/prisma"; 
import bcrypt from "bcryptjs"; // Ensure bcryptjs is installed in your project
import { redirect } from "next/navigation";

// Define a type for your response so the frontend knows what to expect
export type FormState = {
  error?: string;
  success?: boolean;
};


export async function registerUser(formData: FormData): Promise<FormState | void> {
  // 1. Extract values (casting to string for TS safety)
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // --- DEBUGGING ---
  console.log("--- TS Registration Attempt ---");
  console.table({ name, email }); 
  // -----------------

  if (!name || !email || !password) {
    return { error: "Missing required fields" };
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    console.log("✅ User created with ID:", newUser.id);
    
  } catch (error: any) {
    // Prisma common error code for "Unique constraint failed" (email exists)
    if (error.code === 'P2002') {
      return { error: "This email is already registered." };
    }
    
    console.error("❌ DB Error:", error.message);
    return { error: "Something went wrong." };
  }

  // Redirect should happen outside the try/catch block
  redirect("/login");
}