import axiosInstance from "./axiosInstance";

export const LoadProducts = async () => {
    const res = await axiosInstance.get("/api/product/list-products")

    return res.data.productsFormated;
}

export const serachProducts = async (query: string) => {
    const res = await axiosInstance.get(`/api/product/list/search/product?q=${query}`);

    return res.data;
}

export const LoadProduct = async (productId: string) => {
    const res = await axiosInstance.get(`/api/product/detail/${productId}/product`);

    return res.data.productFormated;
}

export const LoadByCategory = async (category: string) => {
    const res = await axiosInstance.get(`/api/product/list-category?category=${category}`);

    return res.data.productsFormated;
}

export const ListCart = async (token: string | null) => {
    const res = await axiosInstance.get(`/api/cart/products`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return res.data.cartDetail;
}

export const AddToCart = async (token: string | null, productId: string) => {
    const res = await axiosInstance.patch(`/api/cart/products/${productId}/add-product`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return res.data;
}

export const RemoveToCart = async (token: string | null, productId: string) => {
    const res = await axiosInstance.patch(`/api/cart/products/${productId}/remove-product`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return res.data;
}
