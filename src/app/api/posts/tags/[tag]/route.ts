import connect from "../../../../../../lib/mongo/db";
import Post from "../../../../../../lib/models/Posts";
import { NextResponse } from "next/server";

type ParamsType = {
  tag: string;
};

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: ParamsType },
) {
  const { tag } = params;
  await connect();

  const postsWithTag = await Post.find({ tag });

  return NextResponse.json({ postsWithTag });
}