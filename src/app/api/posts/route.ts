import connect from "../../../../lib/mongo/db";
import Post, { IPost } from "../../../../lib/models/Posts";
import { NextResponse } from 'next/server';

export const GET = async (request: any): Promise<NextResponse> => {
  try {
    await connect();
    const posts: IPost[] = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching posts" + error, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { tag, title, description, image, blog1title, blog1description, blog1image,blog2title, blog2description, blog2image, blog3title, blog3description, blog3image } = await request.json();
  await connect();
  await Post.create({ tag, title, description, image, blog1title, blog1description, blog1image,blog2title, blog2description, blog2image, blog3title, blog3description, blog3image });
  return NextResponse.json({ message: "post created" }, { status: 201 });
}