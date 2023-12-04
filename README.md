## Getting Started

First, make folder "api" in the src/app folder
this is make a route an api

Structure folder like this:

```bash
src/api/notes->route.js

route.js is naming convetion so we must following with writing name file "route.js"
```

## example code

```bash
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

```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
