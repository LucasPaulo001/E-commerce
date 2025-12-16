import axios from "axios";

const API_URL = "https://e-commerce-j7nk.onrender.com";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Interceptor rodou");
    console.log("Token:", localStorage.getItem("token"));
    console.log("Headers antes:", config.headers);
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
