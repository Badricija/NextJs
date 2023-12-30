import { NextResponse } from "next/server";
import connect from "../../../../../../db";
import Comment, { IComment } from "../../../../../../models/Comment";

export const GET = async (request: any): Promise<NextResponse> => {
    try {
        await connect();
        const posts: IComment[] = await Comment.find();
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new NextResponse("Error in fetching posts" + error, { status: 500 });
    }
  }
export async function POST(request: { json: () => PromiseLike<{ blogId: string; comment: string; author: string; }> | { blogId: any; comment: any; author: any; }; }) {
    const { blogId, comment, author } = await request.json();
    await connect();
    await Comment.create({ blogId, comment, author });
    return NextResponse.json({ message: "comment created" }, { status: 201 });
  } 