import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { propsSession, prospToken } from "./types/next-auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({
      token,
      session,
    }: {
      token: prospToken;
      session: propsSession;
    }) {
      if (token) {
        return {
          ...session,
          user: {
            id: token.username.colaborador.id,
            username: token.username.colaborador.nome,
            email: token.username.colaborador.email,
            role: token.username.colaborador.tipo,
            cpf: token.username.colaborador.cpf,
            status: token.username.colaborador.status,
          },
          tokenUser: token.username.token,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user,
        };
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  ...authConfig,
});

// callbacks: {
//   async session({ token, session }) {
//     console.log(token);
//     if (token.sub && session.user) {
//       session.user.id = token.sub;
//       session.user.role = token.role;
//     }
//     return session;
//   },
//   async jwt({ token}) {
//     token.role = "ADM";
//     return token;
//   },
// },