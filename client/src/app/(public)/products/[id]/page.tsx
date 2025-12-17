"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { LoadProduct } from "@/api/products";
import { DetailProduct } from "@/components/DetailProduct/DetailProduct";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    LoadProduct(String(id))
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => setError("Produto não encontrado."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Produto não encontrado.</div>;

  return (
    <div className="p-4 mt-20">
      <DetailProduct product={product} />
    </div>
  );
}
