import { ProductRepository } from "../product.repository.js";

export const ListAllProductsService = async (page: number, limit: number) => {
  const { products } = await ProductRepository.findAll(page, limit);

  const productsFormated = products.map((product) => ({
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    images: product.images,
    category: product.category,
    stock: product.stock,
    isActive: product.isActive,
    createdAt: product.createdAt,
  }));

  return {
    productsFormated,
  };
};

export const ListByCategoryService = async (category: string) => {
  const products = await ProductRepository.findByCategory(category);

  const productsFormated = products.map((product) => ({
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    images: product.images,
    category: product.category,
    stock: product.stock,
    isActive: product.isActive,
    createdAt: product.createdAt,
  }));

  return {
    productsFormated,
  };
};

export const SearchProductService = async (query: string) => {
  const products = await ProductRepository.search(query);

  const productsFormated = products.map((product) => ({
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    category: product.category,
    images: product.images,
  }));

  return {
    productsFormated,
  };
};

export const ProductDetail = async (productId: string) => {
  const product = await ProductRepository.findById(productId);

  if (!product) throw new Error("Produto não encontrado.");

  const productFormated = {
    id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    category: product.category,
    images: product.images,
  };

  return {
    productFormated,
  };
};
