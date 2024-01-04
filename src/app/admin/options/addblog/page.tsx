import React from "react";
import Link from "next/link";
import AddBlog from "./Addblog";


const CreateBlog = async () => {

  return (
    <div>
      <Link href="/admin">Admin Home</Link>
      <AddBlog  />
    </div>
  );
};

export default CreateBlog;