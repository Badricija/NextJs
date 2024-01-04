"use client";

import React from "react";
import Link from "next/link";
import EditPostList from "./editingposts";
import styles from "./page.module.css"

const getBlog = async () => {
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/id`, {
            cache: "no-store",
        });

        return res.json();
    } catch (error) {
    }
};



const EditBlog = () => {

    return (
        <div>
            <Link href={"/admin"} className={styles.link}>Admin Home</Link>
            <h2> Choose the blog you want to edit</h2>
            <EditPostList />
        </div>
    );
};

export default EditBlog;