import Link from "next/link";
import styles from "./page.module.css"
const Options = () => {
    return (
        <>
            <div className={styles.choose}>
                <Link href="http://localhost:3000/admin/options/addblog" className={styles.link}>Add new blog</Link>
                <Link href="http://localhost:3000/admin/options/editblog" className={styles.link}>Edit a blog</Link>
                <Link href="http://localhost:3000/admin/options/addtag" className={styles.link}>Add tag to a post</Link>
            </div>
        </>
    )
}
export default Options;