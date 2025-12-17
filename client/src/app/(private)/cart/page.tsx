"use client";

import { useEffect, useState } from "react";
import PrivateGuard from "../privateRoutes";
import { ListCart, RemoveToCart } from "@/api/products";
import { useAuthContext } from "@/contexts/AuthContext";
import { Product } from "@/types/products.type";
import { LoadingPage } from "@/components/Loading/LoadingPage";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function Perfil() {
  const [list, setList] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<{ [key: string]: number }>({});

  const { token } = useAuthContext();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const list = await ListCart(token);
        console.log(list.products);

        setList(list.products);
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, [token]);

  const handleRemove = async (productId: string) => {
    await RemoveToCart(token, productId);
    try {
      const list = await ListCart(token);
      console.log(list.products);

      setList(list.products);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingPage />;

  if (Array.isArray(list) && list.length === 0)
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl">Nenhum item no carrinho</h1>
      </div>
    );

  return (
    <PrivateGuard>
      <div className="mt-28">
        <div className="text-center gap-3.5 flex items-center justify-center my-3 flex-col md:flex-row">
          <h1 className="font-bold">{list.length}</h1>
          <span>Produto(s) no carrinho</span>
        </div>

        {loading ? (
          <LoadingPage />
        ) : (
          Array.isArray(list) &&
          list.map((l) => (
            <div
              className="flex gap-3.5 flex-col md:flex-row justify-between border-2 rounded-2xl p-3.5 mx-2.5"
              key={l.id}
            >
              <div className="flex flex-col justify-center items-center md:flex-row">
                <Image
                  src={l.images[0]}
                  width={150}
                  height={150}
                  alt="imagem do produto"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">{l.name}</span>
                  <p>{l.description}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3.5">
                <span className="font-bold">R${l.price}</span>

                <Button className="bg-blue-500 hover:bg-blue-700 cursor-pointer">
                  Finalizar Compra
                </Button>
                <div className="flex gap-3 items-center">
                  <Button
                    className="bg-blue-500 hover:bg-blue-700 cursor-pointer"
                    onClick={() =>
                      setQuantity((prev) => ({
                        ...prev,
                        [l.id]: Math.max((prev[l.id] || 0) - 1, 0),
                      }))
                    }
                  >
                    -
                  </Button>

                  <span className="text-2xl">{quantity[l.id] || 0}</span>

                  <Button
                    className="bg-blue-500 hover:bg-blue-700 cursor-pointer"
                    onClick={() =>
                      setQuantity((prev) => ({
                        ...prev,
                        [l.id]: (prev[l.id] || 0) + 1,
                      }))
                    }
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => handleRemove(l.id)}
                    variant={"destructive"}
                  >
                    <Trash />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </PrivateGuard>
  );
}
