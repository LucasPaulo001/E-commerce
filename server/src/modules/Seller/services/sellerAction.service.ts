
import { variant } from "../../../shared/types/product.type.js";
import { ProductRepository } from "../../Product/product.repository.js";
import { SellerRepository } from "../seller.repository.js";

type DataRequestCreate = {
    userId: string;
    storeName: string;
}

//Dados da loja
export async function CreateStoreService(data: DataRequestCreate){

    const seller = await SellerRepository.findByUser(data.userId);

    if(!seller) throw new Error("Vendedor não encontrado.");

    if(data.storeName) seller.storeName = data.storeName;

    await seller.save();

    return {
        msg: "Nome de loja atribuído com sucesso."
    }
}

export type DataCreateProduct = {
    name: string;
    description: string;
    category: string;
    variants: variant[];
}

//Registrar
export async function RegisterProductService(userId: string, data: DataCreateProduct){

    const seller = await SellerRepository.findByUser(userId);

    if(!seller) throw new Error("Permissões insuficientes.");

    const dataCreate = {
        name: data.name,
        description: data.description,
        category: data.category,
        variants: data.variants
    }

    const newProduct = ProductRepository.create(dataCreate);

    return {
        msg: "Produto adicionado com sucesso.",
        newProduct
    }
}