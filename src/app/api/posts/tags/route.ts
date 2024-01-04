import { NextResponse } from "next/server";
import connect from "../../../../../lib/mongo/db";
import Tag from "../../../../../lib/models/Tags";



export async function POST(request: Request) {
  const { blogId, tag } = await request.json();
  await connect();
  await Tag.create({ blogId, tag});
  return NextResponse.json({ message: " created" }, { status: 201 });
}