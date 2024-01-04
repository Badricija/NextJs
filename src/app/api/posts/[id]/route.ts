
import connect from "../../../../../lib/mongo/db";
import Post from "../../../../../lib/models/Posts";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import Comment from "../../../../../lib/models/Comment";
import Tag from "../../../../../lib/models/Tags";

export async function GET(request, { params }) {
  const { id } = params;
  await connect();

  const objectId = new ObjectId(id);

  const post = await Post.findOne({ _id: objectId });
  const comments = await Comment.find({ blogId: objectId }).sort({
    createdAt: -1,
  });
  const tags = await Tag.find({ blogId: objectId }).sort({
    createdAt: -1,
  });

  return NextResponse.json({ post, comments, tags }, { status: 200 });
}