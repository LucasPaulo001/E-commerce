"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProducts } from "@/redux/slices/productSlices";
import ProductCard from "./ProductCard";
import { LoadingPage } from "../Loading/LoadingPage";
import { groupProductsByCategory } from "@/helpers/groupProductsByCategory";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { FilterCategory } from "../FilterCategroy/FilterCategory";
import Link from "next/link";

export default function ProductsList() {
  const dispatch = useAppDispatch();
  const {
    items,
    loading,
    error,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <LoadingPage />;
  if (error) return <p>Erro: {error}</p>;

  const productsByCategory = groupProductsByCategory(items);

  return (
    <div className="flex flex-col mt-10 gap-10">
      <FilterCategory />
      {Object.entries(productsByCategory).map(([category, products]) => (
        <section key={category}>
          <h1 className="text-2xl font-bold mb-4">{category}</h1>
          <hr className="mb-6" />

          <div className="w-full max-w-[1400px] mx-auto px-4">
            <Carousel
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
        </section>
      ))}
    </div>
  );
}
