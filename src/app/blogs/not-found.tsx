import Link from "next/link";

export default function notFound() {
	return (
		<>
			<h2>404 Not Found</h2>
			<p>
				You went to strange place. Check the link or go back and try again.
			</p>
			<p>
				Click here to go back to <Link href={"/Blogs"}>Blogs</Link>
			</p>
		</>
	);
}
