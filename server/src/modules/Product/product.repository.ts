import { DataCreateProduct } from "../Seller/services/sellerAction.service.js";
import productModel from "./product.model.js";

export const ProductRepository = {
  async findAll(page = 1, limit = 10) {
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      productModel.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      productModel.countDocuments(),
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
    return productModel.find({ category: category });
  },

async search(query: string) {
    const safeQuery = query.trim();
    return await productModel.find({
      $or: [
        { name: { $regex: safeQuery, $options: 'i' } },
        { description: { $regex: safeQuery, $options: 'i' } },
        { category: { $regex: safeQuery, $options: 'i' } }
      ]
    })
    .collation({ locale: 'pt', strength: 1 }) 
    .lean() 
    .exec();
  },

  async findById(id: string) {
    return productModel.findById(id);
  },

  async create(data: DataCreateProduct){
    return await productModel.create(data);
  }
};
