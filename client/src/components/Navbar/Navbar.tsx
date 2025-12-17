"use client"

import { Search, ShoppingCart, User } from "lucide-react";
import { Logo } from "../Logo/Logo";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProduct } from "@/redux/slices/productSearchSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const [value, setValue] = useState<string | "">("");
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = async () => {
    dispatch(searchProduct(value));
    router.replace("/search")
    
  }

  return (
    
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm
          transition-all flex md:grid gap-3.5 md:justify-items-center flex-row md:grid-cols-3 items-center duration-300 px-5 py-6">
      <div className="w-30">
          <Link href={"/"}>
            <Logo />
          </Link>
      </div>
      <div className="w-full flex gap-1.5">
        <Input 
          value={value}
          className="w-full" 
          placeholder="Buscar no E-Shopp..." 
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => handleSearch()} variant={"outline"} className="cursor-pointer">
          <Search />
        </Button>
      </div>
      <div className="hidden bottom-0 md:flex justify-between w-60 gap-3.5">
        <Link href={"/cart"}>
          <ShoppingCart />
        </Link>
        <Link href={"/profile"}>
          <User />
        </Link>
      </div>
      </header>
    
  );
}