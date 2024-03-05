import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { LoginSchema } from "./src/schemas";
import { api } from "./src/data/api";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validateFilds = LoginSchema.safeParse(credentials);
        if (validateFilds.success) {
          const { email, password } = validateFilds.data;

          const response = await api("/autenticacao", {
            method: "POST",
            body: JSON.stringify({
              email: email,
              senha: password,
            }),
          });

          if (response.status !== 200 && response.status !== 201) {
            return null;
          }

          return response.json().then((data) => data);
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
