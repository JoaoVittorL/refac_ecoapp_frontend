"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { signIn } from "../auth";
import { AuthError } from "next-auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFilds = LoginSchema.safeParse(values);

  if (!validateFilds.success) {
    return { error: "Invalid email or password" };
  }

  const { email, password } = validateFilds.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials",
          };
        default:
          return {
            error: "Login não foi encontrado!",
          };
      }
    }
    throw error
  }
};
