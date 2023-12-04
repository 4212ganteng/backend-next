import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // prisma.model.method
    const allNotes = await prisma.notes.findMany();
    return NextResponse.json(
      { data: allNotes, message: "fetch data success!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, meesage: "fetch data error!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const { content, user, title } = await req.json();

  try {
    const createNote = await prisma.notes.create({
      data: {
        title,
        content,
        user,
      },
    });

    return NextResponse.json(
      { data: createNote, message: "success create note" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: "Failed to create note" },
      { status: 500 }
    );
  }
}
