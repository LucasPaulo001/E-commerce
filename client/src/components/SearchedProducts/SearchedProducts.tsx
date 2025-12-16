"use client";

import { useAppSelector } from "@/redux/hooks";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProductCard from "../Products/ProductCard";

export const SearchedProducts = () => {

    const { product } = useAppSelector((state) => state.searchProduct);

    return(
        <div>
            <div className="w-full max-w-350 mx-auto px-4">
            <Carousel
              opts={{
                align: "start",
              }}
            >
              <CarouselContent className="-ml-4 select-none">
                {product.map((product, index) => (
                  <CarouselItem
                    key={`${product.id}_${index}`}
                    className="
                    pl-4
                    basis-full
                    sm:basis-1/2
                    lg:basis-1/3
                    xl:basis-1/4
                  "
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
    )
}