import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-app-beryl-nu-23.vercel.app/api" : "/api",
  withCredentials: true,
});
