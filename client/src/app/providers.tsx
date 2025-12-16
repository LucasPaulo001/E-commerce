"use client";

import { AuthProvider } from "@/contexts/AuthContext";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Provider store={store}>{children}</Provider>
      <Toaster position="top-right" />
    </AuthProvider>
  );
}
