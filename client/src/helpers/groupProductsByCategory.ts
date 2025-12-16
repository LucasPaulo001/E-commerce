import { Product } from "@/types/products.type";

export function groupProductsByCategory(products: Product[]) {
  return products.reduce((acc, product) => {
    const category = product.category;

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(product);

    return acc;
  }, {} as Record<string, Product[]>);
}
