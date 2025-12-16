import { ProductModel } from "./product.model.js";

export const ProductRepository = {
  async findAll(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      ProductModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit),

      ProductModel.countDocuments(),
    ]);
    return {
      products,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  },

  async findByCategory(category: string) {
    return ProductModel.find({ category: category });
  },

  async search(query: string) {
    return ProductModel.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });
  },

  async findById(id: string){
    return ProductModel.findById(id);
  }
};
