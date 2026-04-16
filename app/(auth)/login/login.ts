"use server";

import { prisma } from "@/lib/prisma"; 
import bcrypt from "bcryptjs"; // Ensure bcryptjs is installed in your project
import { redirect } from "next/navigation";
import { createSession } from "@/app/_lib/sessions";


export async function Userlogin(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const inputPassword = formData.get("password") as string;

  // This will now appear in your SERVER terminal (VS Code/Command Prompt)
  console.log("Login Attempt:", email, inputPassword);

  if (!email || !inputPassword) {
    return { error: "Missing credentials" };
  }


 const user = await prisma.user.findUnique({ where: { email } });

 

if (user) {
  const isMatch = await bcrypt.compare(inputPassword, user.password);
  
  if (isMatch) {
    // Login successful
    console.log("✅ Login successful for user ID:", user.id);
    await createSession(String(user.id), user.role); // Create session for the user
    redirect("/dashboard");

  } else {
    console.log("❌ Invalid password for email:", email);
    return { error: "Invalid email or password." }; // Invalid password
  }
    console.log("Comparison not done");
  }
  else{
    return { error: "Invalid email or password." };
  }
}
