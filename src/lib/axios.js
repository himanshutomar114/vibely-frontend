import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5600/api"
    : "https://vibely-backend-f25o.onrender.com/api"; // ✅ Full Render URL in production

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
