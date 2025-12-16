"use client"

import { BannerCarousel } from "@/components/Banners/Banners"
import ProductsList from "@/components/Products/ProductList"

export default function HomePage (){
    return(
        <div className="mt-40">
            <BannerCarousel />
            <ProductsList />
        </div>
    )
}