import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://curious-compass-backend.vercel.app",
  withCredentials: true,
});
