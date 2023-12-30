import connect from "../../../../../db";
import Post from "../../../../../models/Posts";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

interface Params {
  id: string;
}

export async function GET(request: NextRequest, context: { params: Params }) {
  if (!context.params || typeof context.params.id !== 'string') {
    return new NextResponse(JSON.stringify({ error: 'Bad Request' }), { status: 400 });
  }
  
  const { id } = context.params;
  await connect();
  
  const objectId = new ObjectId(id);
  
  const blog = await Post.findOne({ _id: objectId });
  
  const post = blog ? blog.toJSON() : null;
  
  return new NextResponse(JSON.stringify({ post }), { status: 200 });
}
