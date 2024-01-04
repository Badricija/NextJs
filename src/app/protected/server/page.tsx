import Link from "next/link";
import styles from "./page.module.css"

const ServerProtectedPage = async () => {
  return (
    <>
      <Link href="/admin" className={styles.link}>Click here to get on Admin side</Link>
    </>
  )
};

export default ServerProtectedPage;