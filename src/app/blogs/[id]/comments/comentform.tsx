"use client";

import style from "./comentform.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface CommentFormProps {
	blogId: string;
}
const CommentForm: React.FC<CommentFormProps> = ({ blogId }) => {
	const router = useRouter();
	const [author, setAuthor] = useState("");
	const [comment, setComment] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
			setIsLoading(false);
			router.push(`/blogs/${blogId}`);
			router.refresh();
		} else {
			setIsLoading(false);
		}
	};

	return (
		<div className={style.wrapper}>
			<form onSubmit={handleSubmit} className={style.form}>
				<div className="row">
          <h2 className={style.heading}>If you have any opinion about this blog, please leave a comment down below!</h2>
					<div className="col-10">
						<div className="col-4">
							<label className={style.label}>
								<span>Author:</span>
							</label>
						</div>
						<div className="col-8">
							<input
								type="text"
								required
								onChange={(e) => setAuthor(e.target.value)}
								value={author}
								className={style.input}
								title="Author"
								placeholder="Enter your name"
							/>
						</div>
						<div className="col-4">
							<label className={style.label}>
								<span>Comment:</span>
							</label>
						</div>
						<div className="col-8">
							<textarea
								required
								onChange={(e) => setComment(e.target.value)}
								value={comment}
								className={style.textarea}
								title="Comment"
								placeholder="Enter your comment"
							/>
						</div>
						<div className="row">
							<div className="col-4 mt-3">
								<button className="btn btn-primary" disabled={isLoading}>
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
