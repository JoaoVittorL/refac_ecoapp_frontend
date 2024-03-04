import { currentToken } from "@/src/lib/auth";
export async function api(path: string, init?: RequestInit) {
  const authToken = await currentToken();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const baseUrl = "http://localhost:3333";
  const url = new URL(path, baseUrl);
  if (!init) {
    init = {};
  }

  init.headers = {
    ...init.headers,
    Authorization: `Bearer ${authToken}`,
  };

  return fetch(url, init);
}
