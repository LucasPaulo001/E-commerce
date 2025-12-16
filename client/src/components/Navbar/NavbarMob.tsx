"use client";

import { Home, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function NavbarMob() {
  return (
    <header
      className="fixed h-5 bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm
        transition-all flex md:grid gap-3.5 md:justify-items-center flex-row md:grid-cols-3 items-center duration-300 px-5 py-6"
    >
      <div className="flex md:hidden items-center bottom-0 justify-between w-full gap-3.5">
        <Link href={"/"}>
            <Home />
        </Link>
        <span className="border-2 bg-white p-3 h-12.5 mb-4 rounded-full">
            <ShoppingCart />
        </span>
        <Link href={"/profile"}>
            <User />
        </Link>
      </div>
    </header>
  );
}
