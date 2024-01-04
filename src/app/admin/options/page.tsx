import Link from "next/link";
import styles from "./page.module.css"
const Options = () => {
    return (
        <>
            <div className={styles.choose}>
                <h1 className={styles.heading}>Please choose your next movement</h1>
                <Link href="http://localhost:3000/admin/options/addblog" className={styles.link}>Add new blog</Link>
                <Link href="http://localhost:3000/admin/options/editblog" className={styles.link}>Edit a blog</Link>
            </div>
        </>
    )
}
export default Options;