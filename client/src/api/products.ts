import axiosInstance from "./axiosInstance";

export const LoadProducts = async () => {
    const res = await axiosInstance.get("/api/product/list-products?page=1&limit=20")

    return res.data.productsFormated;
}