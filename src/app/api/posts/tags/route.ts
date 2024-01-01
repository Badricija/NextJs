import connect from "../../../../../lib/mongo/db";
import Post from "../../../../../lib/models/Posts";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  const allTags = await Post.distinct("tag");

  return NextResponse.json({ tags: allTags });
}