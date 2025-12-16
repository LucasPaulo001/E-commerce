import axiosInstance from "./axiosInstance";

export const loginAPI = async (email: string, password: string) => {
  const res = await axiosInstance.post(`/api/users/login`, {
    email,
    password,
  });

  return res.data;
};

export const profileAPI = async () => {
  const res = await axiosInstance.get("/api/users/profile");

  return res.data;
}
