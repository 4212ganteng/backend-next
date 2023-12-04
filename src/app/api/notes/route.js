import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "hello next-backend" }, { status: 200 });
}
