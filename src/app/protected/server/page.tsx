
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import AddBlog from "@/app/admin/options/addblog/page";
import AdminPage from "@/app/admin/page";

const ServerProtectedPage = async () => {
  return (
    <>
      <Link href="/admin">Click here to get on Admin side</Link>
    </>
  )
};

export default ServerProtectedPage;