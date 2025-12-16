// guards/PublicGuard.tsx
"use client";

import { useAuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoadingPage } from "@/components/Loading/LoadingPage";

export default function PublicGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && token) {
      router.replace("/");
    }
  }, [loading, token, router]);

  if (loading) return <LoadingPage />;

  return children;
}
