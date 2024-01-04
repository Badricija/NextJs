"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./SignInButton.module.css"

const SigninButton = () => {
    const {data: session} = useSession()
    return (
        <>
        {session ? (
            <button className={styles.button} onClick={() => signOut}>Sign Out</button>

        ): (
            <button className={styles.button} onClick={() => signIn}>Sign In</button>

        )}
        </>
    )
};
export default SigninButton;