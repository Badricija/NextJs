import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { hash } from "bcrypt";
import UserModel from "../../../../lib/models/User";
import connect from "../../../../lib/mongo/db";

export async function GET() {
const session = await getServerSession(authOptions);

if (!session) {
return NextResponse.json({
message: "You are not authorized to view this page",
});
}

return NextResponse.json({
message: "Hello",
});
}
export async function POST() {
  try {
    await connect()
    const passwordHash = await hash("password", 10)
    const adminUser = await UserModel.create({
      username: "admin",
      password: passwordHash,
      email: "admin@test.com",
    })
    console.log("User created successfully")
    return NextResponse.json({
      adminUser,
    })
  } catch (err) {
    const { message } = err as Error
    return NextResponse.json({ message })
  }
  
}