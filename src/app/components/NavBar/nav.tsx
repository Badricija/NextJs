import Link from "next/link";
import styles from "./nav.module.css";
import SigninButton from "../signin/SignInButton";


export default function Nav() {
	return (
		<main>
			<nav className={styles.navBar}>
				<h4 className={styles.title}>Patrīcijas Blog</h4>
				<Link href="/" className={styles.link1}>Home page</Link>
				<Link href="/blogs"className={styles.link2}>Blogs</Link>
				<Link href="/protected/server"className={styles.link3}>Server Page</Link>
				<div className={styles.link4}>
					<SigninButton />
				</div>
			</nav>
		</main>
	);
}
