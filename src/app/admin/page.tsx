"use client"
import SigninForm from "../components/signin/signinform";
import { useRouter } from 'next/navigation';
import { Credentials } from "../api/auth/[...nextauth]/route"; 
import { signIn } from "next-auth/react";

const AdminPage = () => {
    const router = useRouter();

    const handleLogin = async (email: string, password: string) => {
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password
        });
        if (!result?.error) {
            router.push('/admin/options');
        } else {
        }
    }

    return (
        <>
            <SigninForm onLogin={handleLogin} />
        </>
    );
}

export default AdminPage;