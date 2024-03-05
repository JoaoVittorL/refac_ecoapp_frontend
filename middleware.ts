import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "./routes";
const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggeIn = !!req.auth;
  const isApiAuthRote = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRote = publicRoutes.includes(nextUrl.pathname);
  const isAuthRote = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRote) {
    return null;
  }

  if (isAuthRote) {
    if (isLoggeIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggeIn && !isPublicRote) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
