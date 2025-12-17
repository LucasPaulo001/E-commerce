"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function BannerCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000, // tempo entre slides
      stopOnInteraction: false, // continua mesmo se o usuário mexer
    })
  );

  return (
    <Carousel plugins={[autoplay.current]} className="w-full my-12">
      <CarouselContent>
        <CarouselItem className="relative h-[400px]">
          <Image
            src="/banners/banner01.png"
            alt="Banner 1"
            fill
            priority
            className="object-cover"
          />
        </CarouselItem>

        <CarouselItem className="relative h-[400px]">
          <Image
            src="/banners/banner02.png"
            alt="Banner 2"
            fill
            priority
            className="object-cover"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
