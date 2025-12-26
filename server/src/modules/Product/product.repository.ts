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
  // 1. Limpa e prepara a query
  const safeQuery = query.trim();
  
  // 2. Usamos o operador $regex de forma explícita e simplificada
  // Adicionamos o 'collation' para garantir que ignore acentos e maiúsculas
  return await ProductModel.find({
    $or: [
      { name: { $regex: safeQuery, $options: 'i' } },
      { description: { $regex: safeQuery, $options: 'i' } },
      { category: { $regex: safeQuery, $options: 'i' } }
    ]
  })
  .collation({ locale: 'pt', strength: 1 }) 
  .exec(); // O .exec() garante o retorno da Promise
},

  async findById(id: string) {
    return ProductModel.findById(id);
  }
};
