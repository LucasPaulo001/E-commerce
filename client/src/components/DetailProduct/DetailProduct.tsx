"use client";

import { Product } from "@/types/products.type";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ShoppingCart } from "lucide-react";
import { useAuthContext } from "@/contexts/AuthContext";
import { AddToCart } from "@/api/products";
import { toast } from "sonner";
import { Comment } from "../Comment/Comment";

interface IProduct {
  product: Product;
}

export const DetailProduct = ({ product }: IProduct) => {
  const [quantity, setQuantity] = useState<number>(0);

  const { token } = useAuthContext();

  const handleAddToCart = async (productId: string) => {
    await AddToCart(token, productId);
    toast.success("Produto adicionado ao carrinho.");
  };

  return (
    <div className="w-full flex flex-col mt-24">
      <div className="flex md:flex-row flex-col md:items-start items-center justify-around w-full">
        <div>
          <Carousel
            opts={{
              align: "center",
            }}
          >
            <CarouselContent>
              {product.images.map((img, index) => (
                <CarouselItem className="flex justify-center" key={index}>
                  <Image
                    src={img}
                    width={350}
                    height={350}
                    alt="Imagem do produto"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="flex border-l-2 px-5 border-blue-100 gap-2.5 flex-col">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl font-extrabold">
              {product.name}
            </h1>
            <span className="font-light">{product.category}</span>
            <hr />
            <p>{product.description}</p>
          </div>
          <div>
            <span className="font-bold text-3xl">R${product.price}</span>
          </div>
          <div className="flex justify-between flex-row">
            <div className="flex items-center gap-2.5">
              <Button className="bg-blue-500 hover:bg-blue-700 cursor-pointer">
                Comprar
              </Button>
              <Button
                onClick={() => handleAddToCart(product.id)}
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer"
              >
                <ShoppingCart />
              </Button>
            </div>
            <div className="flex gap-3 items-center">
              <Button
                onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : 0))}
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer"
              >
                -
              </Button>
              <span className="text-2xl">{quantity}</span>
              <Button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="bg-blue-500 hover:bg-blue-700 cursor-pointer"
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Comment product={product} />
    </div>
  );
};
