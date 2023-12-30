/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
import CommentForm from "./comments/comentform";
import CommentDetails from "./comments/addcomments/addcomment";
type PostDetailProps = {
	_id: string;
	title: string;
	content: string;
	tag: string;
};

const getPost = async (id: string) => {
	try {
		const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		const postData = await res.json();
		const { post } = postData;
		return post;
	} catch (error) {
		console.log("Error loading blog: ", error);
	}
};

const PostDetails = async ({ params: { id } }: { params: { id: string } }) => {
	const post = await getPost(id);

	if (!post) {
		return notFound();
	}

	return (
		<>
			<div className={styles.blogBlog}>
				<main className="blog">
					<h2 className={styles.title}>{post.title}</h2>

					<p className="blog-p">{post.description}</p>
					<Link href={`/blogs/tags/${post.tag}`} className={styles.tag}>
						<span>{post.tag}</span>
					</Link>
					<div className={styles.concept}>
						<h3 className={styles.titleH3}>{post.blog1title}</h3>
						<img
							src={post?.blog1image}
							alt={`Picture of a concept car: ${post?.title}`}
							width={600}
							className={styles.picture}
						/>
						<p className="blog-p">{post.blog1description}</p>
					</div>
					<div className={styles.concept}>
						<h3 className={styles.titleH3}>{post.blog2title}</h3>
						<img
							src={post?.blog2image}
							alt={`Picture of a concept car: ${post?.title}`}
							width={600}
							className={styles.picture}
						/>
						<p className="blog-p">{post.blog2description}</p>
					</div>
					<div className={styles.concept}>
						<h3 className={styles.titleH3}>{post.blog3title}</h3>
						<img
							src={post?.blog3image}
							alt={`Picture of a concept car: ${post?.title}`}
							width={600}
							className={styles.picture}
						/>
						<p className="blog-p">{post.blog3description}</p>
					</div>
					<div>
						<CommentDetails />
						<CommentForm blogId={""} />
					</div>
				</main>
			</div>
		</>
	);
};

export default PostDetails;
