
import connect from "../../../../../lib/mongo/db";
import Post from "../../../../../lib/models/Posts";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import Comment from "../../../../../lib/models/Comment";

export async function GET(request, { params }) {
  const { id } = params;
  await connect();

  const objectId = new ObjectId(id);

  const post = await Post.findOne({ _id: objectId });
  const comments = await Comment.find({ blogId: objectId }).sort({
    createdAt: -1,
  });

  return NextResponse.json({ post, comments }, { status: 200 });
}