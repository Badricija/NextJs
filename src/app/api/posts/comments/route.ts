import { NextResponse } from "next/server";
import connect from "../../../../../lib/mongo/db";
import Comment from "../../../../../lib/models/Comment";



export async function POST(request: Request) {
  const { blogId, comment, author } = await request.json();
  await connect();
  await Comment.create({ blogId, comment, author });
  return NextResponse.json({ message: " created" }, { status: 201 });
}