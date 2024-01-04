import React from "react";
import Link from "next/link";
import AddBlog from "./Addblog";
import styles from "./page.module.css"


const CreateBlog = async () => {

  return (
    <div>
      <Link href="/admin"className={styles.link}>Admin Home</Link>
      <AddBlog  />
    </div>
  );
};

export default CreateBlog;