import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs"
import prisma from '@/lib/prisma'; // Adjust this path to where your PrismaClient is initialized

export async function POST(request: Request) {
  try {
    // 1. Parse the JSON body from the request
    const data = await request.json();
    const { name, email, password, role } = data;

    // 2. Simple validation (Ensure required fields exist)
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and Password are required' },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    // 3. Save to MariaDB using the Library Engine
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password:hashedPassword,
        role: role || 'USER', 
        updatedAt: new Date(),
      },
    });

    // 4. Return the created user (excluding password for security)
    const { password: _, ...userWithoutPassword } = newUser;
    return NextResponse.json(userWithoutPassword, { status: 201 });

  } catch (error: any) {
    // Handle Prisma Unique Constraint error (e.g., email already exists)
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A user with this email already exists.' },
        { status: 409 }
      );
    }

    console.error('Request Error:', error);
    return NextResponse.json(
      { error: 'Error creating user' },
      { status: 500 }
    );
  }
}