/* eslint-disable @next/next/no-img-element */

import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

type CommentType = {
	_id: string;
	author: string;
	comment: string;
	createdAt: string;
};

const getPost = async (id: string) => {
	try {
		const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		const Datas = await res.json();

		const { post, comments } = Datas;
		return { post: post, comments: comments };
	} catch (error) {
		console.log("Error loading blog: ", error);
	}
};

const SingleViewEdit = async ({ params: { id } }: { params: { id: string } }) => {
	const postInfo = await getPost(id);

	if (!postInfo) {
		return notFound();
	}
	return (
		<>
			<div className={styles.blogBlog}>
				<main className="blog">
					<h2 className={styles.title}>{postInfo.post.title}</h2>

					<p className="blog-p">{postInfo.post.description}</p>
					<Link
						href={`/blogs/tags/${postInfo.post.tag}`}
						className={styles.tag}
					>
						<span>{postInfo.post.tag}</span>
					</Link>
					<div className={styles.concept}>
						<h3 className={styles.titleH3}>{postInfo.post.blog1title}</h3>
						<img
							src={postInfo.post.blog1image}
							alt={`Picture of a concept car: ${postInfo.post.title}`}
							width={600}
							className={styles.picture}
						/>
						<p className="blog-p">{postInfo.post.blog1description}</p>
					</div>
					<div className={styles.concept}>
						<h3 className={styles.titleH3}>{postInfo.post.blog2title}</h3>
						<img
							src={postInfo.post.blog2image}
							alt={`Picture of a concept car: ${postInfo.post.title}`}
							width={600}
							className={styles.picture}
						/>
						<p className="blog-p">{postInfo.post.blog2description}</p>
					</div>
					<div className={styles.concept}>
						<h3 className={styles.titleH3}>{postInfo.post.blog3title}</h3>
						<img
							src={postInfo.post.blog3image}
							alt={`Picture of a concept car: ${postInfo.post.title}`}
							width={600}
							className={styles.picture}
						/>
						<p className="blog-p">{postInfo.post.blog3description}</p>
						<span className={styles.created}>{postInfo.post.createdAt}</span>
					</div>
					<div>
						{postInfo.comments.map((com: CommentType) => (
							<div key={com._id} className={styles.comcard}>
								<h3 className={styles.author}>{com.author}</h3>
								<p className={styles.comment}>{com.comment}</p>
								<span className={styles.created}>
									{com.createdAt}
								</span>
							</div>
						))}
						{postInfo.comments.length === 0 && (
							<p className={styles.noComment}>
								You can be the first to write a comment.
							</p>
						)}
					</div>
				</main>
			</div>
		</>
	);
};

export default SingleViewEdit;