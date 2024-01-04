"use client";
import { useRouter } from "next/navigation";
import styles from "./Addblog.module.css";
import { useState } from "react";

const AddBlog = () => {
	const router = useRouter();
	const initialFormData = {
		title: "",
		tag: "",
		image: "",
		description: "",
		blog1description: "",
		blog1title: "",
		blog1image: "",
		blog2description: "",
		blog2title: "",
		blog2image: "",
		blog3description: "",
		blog3title: "",
		blog3image: "",
	};
	const [formData, setFormData] = useState(initialFormData);

	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (e: { target: { value: string; name: string } }) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const submitPost = {
			title: formData.title,
			tag: formData.tag,
			image: formData.image,
			description: formData.description,
			blog1description: formData.blog1description,
			blog1title: formData.blog1title,
			blog1image: formData.blog1image,
			blog2description: formData.blog2description,
			blog2title: formData.blog2title,
			blog2image: formData.blog2image,
			blog3description: formData.blog3description,
			blog3title: formData.blog3title,
			blog3image: formData.blog3description,
		};

		const res = await fetch("http://localhost:3000/api/posts", {
			method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitPost),
		});
		if (res.status === 201) {
			router.push(`/blogs`);
			router.refresh();
		} else {
			setIsLoading(false);
		}
	};

	return (
		<div className={styles.blog}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.title}>Add New Blog</h1>
				<div className={styles.item}>
					<label className={styles.label}>Please add your title</label>
					<input
						type="text"
						name="title"
						className={styles.input}
						value={formData.title}
						onChange={handleChange}
						required
						placeholder="Enter the main title of your blog"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Add Image URL</label>
					<input
						type="text"
						name="image"
						className={styles.input}
						value={formData.image}
						onChange={handleChange}
						required
						placeholder="Enter the URL of your blog's cover image"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>
						Add short description about blog
					</label>
					<input
						type="text"
						name="description"
						className={styles.input}
						value={formData.description}
						onChange={handleChange}
						required
						placeholder="Enter a short description of your blog"
					/>
				</div>

				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Description</label>
					<textarea
						name="blog1description"
						className={styles.input}
						value={formData.blog1description}
						onChange={handleChange}
						required
						placeholder="Enter the description for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Title</label>
					<input
						type="text"
						name="blog1title"
						className={styles.input}
						value={formData.blog1title}
						onChange={handleChange}
						required
						placeholder="Enter the title for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Image URL</label>
					<input
						type="text"
						name="blog1image"
						className={styles.input}
						value={formData.blog1image}
						onChange={handleChange}
						required
						placeholder="Enter the image URL for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Description</label>
					<textarea
						name="blog2description"
						className={styles.input}
						value={formData.blog2description}
						onChange={handleChange}
						required
						placeholder="Enter the description for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Title</label>
					<input
						type="text"
						name="blog2title"
						className={styles.input}
						value={formData.blog2title}
						onChange={handleChange}
						required
						placeholder="Enter the title for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Image URL</label>
					<input
						type="text"
						name="blog2image"
						className={styles.input}
						value={formData.blog2image}
						onChange={handleChange}
						required
						placeholder="Enter the image URL for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Description</label>
					<textarea
						name="blog3description"
						className={styles.input}
						value={formData.blog3description}
						onChange={handleChange}
						required
						placeholder="Enter the description for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Title</label>
					<input
						type="text"
						name="blog3title"
						className={styles.input}
						value={formData.blog3title}
						onChange={handleChange}
						required
						placeholder="Enter the title for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Blog 1 Image URL</label>
					<input
						type="text"
						name="blog3image"
						className={styles.input}
						value={formData.blog3image}
						onChange={handleChange}
						required
						placeholder="Enter the image URL for Blog 1"
					/>
				</div>
				<div className={styles.item}>
					<label className={styles.label}>tag</label>
					<input
						type="text"
						name="tag"
						className={styles.input}
						value={formData.tag}
						onChange={handleChange}
						required
						placeholder="Enter the tag"
					/>
				</div>
				<button className={styles.button} disabled={isLoading}>
									{isLoading && <span>Adding...</span>}
									{!isLoading && <span>Add Form</span>}
				</button>
			</form>
		</div>
	);
};

export default AddBlog;
