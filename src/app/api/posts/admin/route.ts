import { connect } from "mongoose";
import { NextResponse } from "next/server";
import Post from "../../../../../lib/models/Posts";

export const POST = async (request: { json: () => PromiseLike<{ title: any; description: any; tag: any; image: any; }> | { title: any; description: any; tag: any; image: any; }; }) => {
  const { title, description, tag, image } = await request.json();
  await connect();
  await Post.create({ title, description, tag, image });
  return NextResponse.json({ message: "blog created" }, { status: 201 });
}

export const deletePost = async (req: { nextUrl: { searchParams: { get: (arg0: string) => any; }; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; }) => {
  const id = req.nextUrl.searchParams.get("id");
  await connect();
  await Post.findByIdAndDelete(id);
  return res.status(200).json({ message: "Blog Deleted" });
}

export const PUT = async (req: any) => {
  const { id, title, description, tag, image } = await req.json();
  await connect();
  const post = await Post.findByIdAndUpdate(
    id,
    {
      title,
      description,
      tag,
      image,
    },
    { new: true }
  );
  return post ? new NextResponse(JSON.stringify(post), { status: 200 }) : new NextResponse("Post not found", { status: 404 });
};