namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
      MONGODB_URL: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
    }
  }