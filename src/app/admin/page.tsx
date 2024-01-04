import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Options from "./options/page"

const adminPanel = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div>Hi, {session?.user.username ?? "friend"}</div>
        <Options />
    </div>
  );
};

export default adminPanel;