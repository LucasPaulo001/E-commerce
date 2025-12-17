import axiosInstance from "@/api/axiosInstance";
import { Product } from "@/types/products.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IProductState {
    product: Product[],
    loading: boolean,
    error: string | null
}

const initialState: IProductState = {
    product: [],
    loading: false,
    error: null
}

export const searchProduct = createAsyncThunk(
    "products/searchProducts",
    async (category: string) => {
        const res = await axiosInstance.get(`/api/product/list/search/product?q=${category}`);
        return res.data.productsFormated;
    }
)

const searchProductSlice = createSlice({
    name: "searchProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            .addCase(searchProduct.fulfilled, (state, action) => {
                state.product = action.payload;
                state.loading = false;
            })

            .addCase(searchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Erro ao buscar postagens"
            })
    }
})

export default searchProductSlice.reducer;