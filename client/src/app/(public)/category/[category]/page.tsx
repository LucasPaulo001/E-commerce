"use client";

import { LoadByCategory } from "@/api/products";
import { LoadingPage } from "@/components/Loading/LoadingPage";
import ProductCard from "@/components/Products/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Product } from "@/types/products.type";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { category } = useParams();

  useEffect(() => {
    if (!category) return;
    const fetchProducts = async () => {
      try {
        const decodedCategory = decodeURIComponent(String(category));
        const list = await LoadByCategory(decodedCategory);

        setProducts(list);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if(loading) return <LoadingPage />

  return (
    <div>
      <Carousel
        className="mt-28"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className="-ml-4 select-none">
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="
                    pl-4
                    mx-7
                    md:mx-1.5
                    basis-1/2
                    sm:basis-1/2
                    lg:basis-1/3
                    xl:basis-1/4
                  "
            >
              <Link href={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
