"use client";

import { BannerCarousel } from "@/components/Banners/Banners";
import ProductsList from "@/components/Products/ProductList";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUser } from "@/redux/slices/profileSlices";
import { useEffect } from "react";

export default function HomePage() {
  const { user, loading } = useAppSelector((state) => state.user);
   const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div className="mt-40">
      <span className="mb-48 p-4 text-[20px] md:text-2xl font-extrabold">
        Seja bem vindo(a) <span className="text-blue-500">{user?.name}</span>
      </span>
      <hr />
      <BannerCarousel />
      <ProductsList />
    </div>
  );
}
