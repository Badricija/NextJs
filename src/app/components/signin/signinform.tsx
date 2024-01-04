"use client"
import React from 'react'; // Import React
import styles from "./signinform.module.css"; // Changed file name per your code structure
import { useState } from "react";

// Define the type of the onLogin prop
interface SigninFormProps {
  onLogin: (email: string, password: string) => Promise<void>;
}

const SigninForm = ({ onLogin }: SigninFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onLogin(email, password);
  };

  return (
    <div className={styles.form}>
      <form className={styles.signin} onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          title="E-mail"
          placeholder="Enter your email"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          title="Password"
          placeholder="Enter your password"
        />
        <button type="submit" className={styles.submitButton}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
