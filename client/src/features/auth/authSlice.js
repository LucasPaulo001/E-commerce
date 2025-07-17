import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const api_url = import.meta.env.VITE_URL_API;

//Login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(`${api_url}/api/users/login`, data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

//Registro
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(`${api_url}/api/users/register`, data);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

//Pegar usuário logado
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (thunkAPI) => {
    try{
      const token = localStorage.getItem("token")
      const res = await axios.get(`${api_url}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return res.data;
    }
    catch(err){
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
)

//Estado inicial do state
const initialState = {
  user: null,
  token: null,
  loading: false,
  error: false,
  isLogged: false,
};

//Criação de slice de autenticação
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLogged = false;

      localStorage.removeItem("token")
    },
  },
  extraReducers: (builder) => {
    builder

      //Cases de login de usuário
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogged = true;
        state.user = action.payload.user;
        state.token = action.payload.token;

        //Mandando token para o localstorage
        localStorage.setItem("token", action.payload.token)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        const erros = action.payload?.errors;
        state.error = Array.isArray(erros)
          ? erros
          : "Erro desconhecido."
      })

      //Cases de registro de usuário
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        const erros = action.payload?.errors;
        state.error = Array.isArray(erros)
          ? erros
          : "Erro desconhecido.";
      })

      //Cases de dados de usuário logado
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLogged = true;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLogged = false;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
