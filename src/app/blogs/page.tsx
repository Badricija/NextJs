/* eslint-disable @next/next/no-img-element */
import { IPost } from "../../../models/Posts";
import Link from "next/link";
import styles from "./page.module.css";

const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading blogs: ", error);
  }
};


const PostList = async () => {
	const posts = await getPosts();

	return (
		<>
			{posts.map((post: IPost) => (
				<div key={post._id} className={styles.linkBlog}>
					<Link href={`/blogs/${post._id}`} className={styles.link}>
						<h3 className={styles.title}>{post.title}</h3>
						<div className="picture">
							<img
								src={post?.image}
								alt={`Picture of a concept car: ${post?.title}`}
								width={400}
								className={styles.picture}
							/>
						</div>
					</Link>
					<Link href={`/blogs/tags/${post.tag}`} className={styles.tag}>
						<span className="button">{post.tag}</span>
					</Link>
				</div>
			))}
			{[posts].length === 0 && <p>There are no available blogs...</p>}
		</>
	);
};

export default PostList;
