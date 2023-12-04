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
