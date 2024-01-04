"use client";

import styles from "./form.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentForm = ({ blogId }: { blogId: string }) => {
	const router = useRouter();

	const [author, setAuthor] = useState("");
	const [comment, setComment] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const submitComment = {
			blogId,
			comment,
			author,
		};

		const res = await fetch("http://localhost:3000/api/posts/comments", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(submitComment),
		});

		if (res.status === 201) {
			setAuthor("");
			setComment("");
			setIsLoading(false);

			router.push(`/blogs/${blogId}`);
			router.refresh();
		} else {
			setIsLoading(false);
		}
	};
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit} className={styles.form}>
			<div className="text">
					<h2 className={styles.heading}>
						If you have any opinion about this blog, please leave a comment down
						below!
					</h2>
					<div className="text">
						<div className="text">
							<label className={styles.label}>
								<span>Your name</span>
							</label>
						</div>
						<div className="text">
							<input
								type="text"
								required
								onChange={(e) => setAuthor(e.target.value)}
								value={author}
								className={styles.input}
								title="Author"
								placeholder="Enter your name"
							/>
						</div>
						<div className="text">
							<label className={styles.label}>
								<span>Comment</span>
							</label>
						</div>
						<div className="text">
							<textarea
								required
								onChange={(e) => setComment(e.target.value)}
								value={comment}
								className={styles.textarea}
								title="Comment"
								placeholder="Enter your comment"
							/>
						</div>
						<div className="text">
						<div className="text">
								<button className={styles.button} disabled={isLoading}>
									{isLoading && <span>Adding...</span>}
									{!isLoading && <span>Add Comment</span>}
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CommentForm;
