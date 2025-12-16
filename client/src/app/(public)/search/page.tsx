"use client";

import { LoadingPage } from "@/components/Loading/LoadingPage";
import { SearchedProducts } from "@/components/SearchedProducts/SearchedProducts";
import { useAppSelector } from "@/redux/hooks";

export default function Search() {
  const { product, loading, error } = useAppSelector(
    (state) => state.searchProduct
  );
  return (
    <main className="pt-28 px-4">
      <h1 className="text-2xl font-bold mb-4">Resultados da busca</h1>

      {loading && <LoadingPage />}
      {error && <p>{error}</p>}
      {product.length === 0 && !loading && <p>Nenhum produto encontrado</p>}

      {product.length > 0 && <SearchedProducts />}
    </main>
  );
}
