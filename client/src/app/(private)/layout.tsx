"use client";

import Navbar from "@/components/Navbar/Navbar";
import PrivateGuard from "./privateRoutes";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateGuard>
      <Navbar />
        {children}
    </PrivateGuard>
  );
}
