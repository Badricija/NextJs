import connect from "../../../../../../db";
import Post from "../../../../../../models/Posts";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { tag: string } }) {
  const { tag } = params;
  await connect();

  const postsWithTag = await Post.find({ tag });

  return NextResponse.json({ postsWithTag });
}
