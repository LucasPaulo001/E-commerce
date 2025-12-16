"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoadingPage } from "@/components/Loading/LoadingPage";

export default function PrivateGuard({ children }: { children: React.ReactNode }) {
  const { token, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !token) {
      router.replace("/login");
    }
  }, [loading, token]);

  if (loading) return <LoadingPage />;

  return children;
}