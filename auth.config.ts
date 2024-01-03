import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

import { LoginSchema } from "./schemas";
import axios from "axios";

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validateFilds = LoginSchema.safeParse(credentials);
        if (validateFilds.success) {
          const response = await axios.post(
            "http://localhost:3333/autenticacao",
            {
              email: credentials?.email,
              senha: credentials?.password,
            }
          );

          if (response.status !== 200 && response.status !== 201) {
            return null;
          }

          const user = await response.data;
          return user;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
