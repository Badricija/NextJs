import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiHandler } from "next";
import { loginUser } from "../../../../../lib/services/auth";

interface Credentials {
  email: string;
  password: string;
  username: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        email: { label: "E-mail", type: "text" },
      },

       async authorize(credentials) {
        const { email, password } = credentials as Credentials;
        const user = await loginUser({ email, password });

        return user
      },
    }),
  ],

  // pages: {
  //   signIn: "/signin",
  // },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  jwt: {
    maxAge: 7 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = {
          ...token.user,
          password: undefined,
        };
      }

      return session;
    },
  },
};

const handler: NextApiHandler = NextAuth(authOptions);

export { handler as GET, handler as POST };