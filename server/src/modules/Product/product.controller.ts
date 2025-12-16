import { Response } from "express";
import { CustomRequest } from "../../middlewares/authGuard.js";
import { ListAllProductsService, ListByCategoryService, SearchProductService } from "./services/ProductList.service.js";

export const ListAllProductsController = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const {page, limit} = req.query;

    const result = await ListAllProductsService(Number(page), Number(limit));

    res.status(200).json(result);

  } catch (err: any) {

    res.status(500).json({
      msg: "Erro interno do servidor. (register)",
      err: err.message,
    });
    
  }
};

export const ListProductsByCategoryController = async (
  req: CustomRequest,
  res: Response
) => {
  try {
    const { category } = req.body;

    const result = await ListByCategoryService(category);

    res.status(200).json(result);

  } catch (err: any) {

    res.status(500).json({
      msg: "Erro interno do servidor. (List by category)",
      err: err.message,
    });
    
  }
};

export const SearchProductController = async (req: CustomRequest, res: Response) => {
  try{

    const { q } = req.query;

    const result = await SearchProductService(String(q));

    res.status(200).json(result);
  }
  catch(err: any){

    res.status(500).json({
      msg: "Erro interno do servidor. (List by category)",
      err: err.message,
    });
    
  }
}
