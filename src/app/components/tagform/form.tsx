"use client";

import styles from "./form.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TagForm = ({ blogId }: { blogId: string }) => {
	const router = useRouter();

	const [tag, setTag] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const submitTag = {
			blogId,
			tag,
		};

		const res = await fetch("http://localhost:3000/api/posts/tags", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(submitTag),
		});

		if (res.status === 201) {
			setTag("");
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
					<h2 className={styles.heading}>Add tag to your blog</h2>
					<div className="text">
						<div className="text">
							<label className={styles.label}>
								<span>Tag name</span>
							</label>
						</div>
						<div className="text">
							<input
								type="text"
								required
								onChange={(e) => setTag(e.target.value)}
								value={tag}
								className={styles.input}
								title="tag"
								placeholder="Enter tag"
							/>
						</div>

						<div className="text">
							<button className={styles.button} disabled={isLoading}>
								{isLoading && <span>Adding...</span>}
								{!isLoading && <span>Add tag</span>}
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TagForm;
