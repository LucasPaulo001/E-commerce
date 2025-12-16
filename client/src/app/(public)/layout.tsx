"use client";

import Navbar from "@/components/Navbar/Navbar";
import NavbarMob from "@/components/Navbar/NavbarMob";
import PublicGuard from "./publicRoutes";
import Footer from "@/components/Footer/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PublicGuard>
      <Navbar />
      {children}
      <Footer />
      <div className="md:hidden">
        <NavbarMob />
      </div>
    </PublicGuard>
  );
}
