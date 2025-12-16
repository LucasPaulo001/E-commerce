"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { loginAPI } from "../api/auth";

interface AuthContextProps {
  login: (email: string, password: string) => Promise<void>;
  token: string | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    if (tokenStorage) setToken(tokenStorage);
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await loginAPI(email, password);

      setToken(res.token);

      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // logout
  const logout = () => {
    if(token){
      localStorage.removeItem("token");
      setToken("");
    }
  }

  const values: AuthContextProps = {
    login,
    token,
    loading,
    logout
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("use o authContext dentro de um AuthProvider");
  }
  return context;
};
