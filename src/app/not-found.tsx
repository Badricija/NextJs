import Link from "next/link";

export default function notFound() {
	return (
		<>
			<h2>404 Not Found</h2>
			<p>
				There is no page that you are looking for, or you went to strange link
			</p>
			<p>
				Click here to go back to <Link href={"/"}>Home</Link>
			</p>
		</>
	);
}
