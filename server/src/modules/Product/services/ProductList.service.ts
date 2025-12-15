import { ProductRepository } from "../product.repository.js";

export const ListAllProductsService = async (page: number, limit: number) => {

    const {
        products,
    } = await ProductRepository.findAll(page, limit);

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
    }))

    return {
       productsFormated
    }
}