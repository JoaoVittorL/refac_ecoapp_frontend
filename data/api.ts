import { currentToken } from "@/lib/auth";
import axios from "axios";
const token = await currentToken()

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token ${token}`,
  },
});
