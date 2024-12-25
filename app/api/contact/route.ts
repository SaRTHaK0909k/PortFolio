import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    // Parse the incoming request body
    const { name, email, message } = await req.json();

    // Validate the input data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Create a new contact message in the database
    await prisma.contactForm.create({
      data: {
        name,
        email,
        message,
      },
    });

    // Send success response
    return NextResponse.json(
      { message: "Message submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting message:", error);
    return NextResponse.json(
      { error: "Unable to submit message." },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma client to avoid memory leaks
    await prisma.$disconnect();
  }
}
