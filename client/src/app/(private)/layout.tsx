"use client";

import Navbar from "@/components/Navbar/Navbar";
import PrivateGuard from "./privateRoutes";
import Footer from "@/components/Footer/Footer";
import NavbarMob from "@/components/Navbar/NavbarMob";
import { Toaster } from "sonner";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PrivateGuard>
      <Navbar />
      {children}
      <Footer />
      <div className="md:hidden">
        <NavbarMob />
      </div>
      <Toaster />
    </PrivateGuard>
  );
}
