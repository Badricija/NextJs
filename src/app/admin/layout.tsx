import { getServerSession } from "next-auth"
import type { Metadata } from "next";
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/dist/server/api-utils"

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by CreateForm next app",
  };
  
  export default async function AdminPanel({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const session = await getServerSession(authOptions);
  
    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/admin");
    }
  
    return <div className="container">{children}</div>;
  }