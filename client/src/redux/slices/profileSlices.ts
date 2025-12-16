import { profileAPI } from "@/api/auth";
import { TUser } from "@/types/user.type";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface userState {
  user: TUser | null;
  loading: boolean;
  error: string | null;
}

const initialState: userState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  return await profileAPI();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Erro ao buscar produtos";
      });
  },
});

export default userSlice.reducer;
