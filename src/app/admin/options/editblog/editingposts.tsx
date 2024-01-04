/* eslint-disable @next/next/no-img-element */
import { IPost } from "../../../../../lib/models/Posts";
import Link from "next/link";
import styles from "./editingposts.module.css";

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


const EditPostList = async () => {
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
					<Link href="http://localhost:3000/admin/options/editblog/singleview" className={styles.link}>Click here to edit in single view</Link>
				</div>
			))}
			{[posts].length === 0 && <p> What? Where are blogs?</p>}
		</>
	);
};

export default EditPostList;