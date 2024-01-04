import NextAuth, { DefaultSession } from "next-auth";
import { IUser } from "../lib/models/User";

declare module "next-auth" {
  interface Session {
    user: IUser & DefaultSession["user"];
  }
  interface User {
    id?: string;
    username: string;
    email: string;
    image?: string;
    createdAt?: string;
    updatedAt?: string;
  }
  
}

declare module "next-auth/jwt" {
  interface JWT {
    user: IUser & DefaultSession["user"];
  }
  
}