import NextAuth, { Token, Session } from "next-auth";
import authConfig from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ session, token }: { session: Session; token: Token }) {
      if (token) {
        const {
          username: { colaborador, token: tokenUser },
        } = token;
        const { id, nome, email, tipo, cpf, status } = colaborador;
        return {
          ...session,
          user: {
            id,
            username: nome,
            email,
            role: tipo,
            cpf,
            status,
          },
          tokenUser,
        };
      }

      console.log(session);
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