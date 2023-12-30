import { NextResponse } from "next/server";
import connect from "../../../../../db";
import Post, { IPost } from "../../../../../models/Posts";

export const GET = async (request: any): Promise<NextResponse> => {
    try {
        await connect();
        const posts: IPost[] = await Post.find();
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse("Error in fetching posts" + error, { status: 500 });
    }
}
export const  POST = async (request: { json: () => PromiseLike<{ title: any; description: any; tag: any; image: any; }> | { title: any; description: any; tag: any; image: any; }; }) => {
    const { title, description, tag, image } = await request.json();
    await connect();
    await Post.create({ title, description, tag, image});
    return NextResponse.json({ message: "blog created" }, { status: 201 });
  }
  
  export const deletePost = async (req: { nextUrl: { searchParams: { get: (arg0: string) => any; }; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; }) => {
    const id = req.nextUrl.searchParams.get("id");
    await connect();
    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: "Blog Deleted" });
  }