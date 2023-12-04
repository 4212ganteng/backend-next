import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "hello next-backend" }, { status: 200 });
}
export async function PATCH() {
  return NextResponse.json({ message: "hello next-backend" }, { status: 200 });
}
export async function POST(req) {
  const { name } = await req.json();
  return NextResponse.json({ message: `hello , ${name}` }, { status: 200 });
}
