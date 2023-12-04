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

## Working with prisma

Install package

```bash
npm i prisma @prisma/client
```

Generate prisma file

```bash
npx prisma init
```

run local migration (sqlite)

```bash
npx prisma migrate dev
```

# OR

run DB migration (PostgreeSQL,mySQL)

```bash
npx prisma db push
```

## example setup Working with prisma (sqlite)

sqlite is db type files not server but we can embeded in to project

- make db file for sqlite (prisma/dev.db)
- change data source on schema.prisma (datasource db {
  provider = "sqlite" ==> db engine
  url = "file:./dev.db" ==> path file db
  })

make model on /prisma/schema.prisma

# Structure Model

```bash
model nameTable {
nameField TypeData <optional>
nameField TypeData <optional>
nameField TypeData <optional>
}
```

# Example Model

```bash
model Notes {
  id Int @id
  content String
  user String
  createdAt DateTime @default(now())

}
```

- run migration

```bash
npx prisma migrate dev
```

to view migration and table ui, run this comand.

```bash
npx prisma studio
```

# Tips :

You can make script on package.json for migrations and view table ui

```bash
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:migrate":"npx prisma migrate dev --name dev",
    "db:studio":"npx prisma studio"
  },
```

## Prisma - ORM

- we must generate client to connect js-><prisma>->db

```bash
npx prisma generate
```

- make folder and file "/src/utils/prisma.js"
  we paste code from terminal after generating with command above

"prisma.js"

```bash
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

# Examples code

```bash

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

```
