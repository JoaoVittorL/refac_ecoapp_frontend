/**
 * An array of routes that are acessible to the public
 * These routes dp not require authentication
 * @type {string[]}
 */
// "/api/sign-up"
export const publicRoutes = ["/auth/login", "/auth/register"];
/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];
/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are us for API atuhentication purposes
 * @type {string}
 */
// export const apiAuthPrefix = "/api/auth";
export const apiAuthPrefix = "/api/auth/[...nextauth]";

export const DEFAULT_LOGIN_REDIRECT = "/";
