import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQwNjQwMjMsImV4cCI6MTcwNDE1MDQyMywic3ViIjoiOCJ9.OmRiz2x3Hj54hfuU-Gf_m1ISOOS7EXYcAZQhQWZQmAk"
export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Token ${token}`,
  },
});
