import { currentToken } from "@/lib/auth";
import axios from "axios";
const token = await currentToken()

export const api = axios.create({
  baseURL: "https://touching-grizzly-logical.ngrok-free.app",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token ${token}`,
  },
});
