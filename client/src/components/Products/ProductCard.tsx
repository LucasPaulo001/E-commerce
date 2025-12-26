import { Product } from "@/types/products.type";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="transition w-60 hover:border-blue-300 cursor-pointer border-2 p-4 rounded shadow-sm flex flex-col">
      <div className="relative w-full aspect-square mb-2">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain rounded"
        />
      </div>
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.description.slice(0, 35)}...</p>
      <p className="font-semibold mt-1">R$ </p>
    </div>
  );
}
