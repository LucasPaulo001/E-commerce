"use client"

import { Search, ShoppingCart, User } from "lucide-react";
import { Logo } from "../Logo/Logo";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState, useEffect } from "react"; // 1. Adicionado useEffect
import { useDispatch } from "react-redux";
import { searchProduct } from "@/redux/slices/productSearchSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [value, setValue] = useState<string>("");
  const [mounted, setMounted] = useState(false); // 2. Estado para controle de montagem
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  // 3. Só marca como montado após chegar no cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = async () => {
    if (!value.trim()) return;
    dispatch(searchProduct(value));
    router.replace("/search");
  }

  // Se não estiver montado, renderiza uma versão simplificada ou nula 
  // para evitar que o HTML do servidor divirja do cliente inicial
  if (!mounted) {
    return <header className="fixed top-0 w-full h-20 bg-white" />; 
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm
        transition-all flex md:grid gap-3.5 md:justify-items-center flex-row md:grid-cols-3 items-center duration-300 px-5 py-6">
      
      <div className="w-30">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="w-full flex gap-1.5">
        <Input 
          value={value}
          className="w-full" 
          placeholder="Buscar no E-Shopp..." 
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Melhora a experiência
        />
        <Button onClick={handleSearch} variant="outline" className="cursor-pointer">
          <Search />
        </Button>
      </div>

      <div className="hidden md:flex justify-between w-60 gap-3.5">
        <Link href="/cart">
          <ShoppingCart />
        </Link>
        <Link href="/profile">
          <User />
        </Link>
      </div>
    </header>
  );
}