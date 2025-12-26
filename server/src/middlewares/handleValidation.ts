import { NextFunction, Response } from "express";
import { validationResult } from "express-validator";
import { CustomRequest } from "./authGuard.js";


export const validation = (req: CustomRequest, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors: any[] = [];

  errors.array().map((err) => extractedErrors.push(err));

  res.status(422).json({
    errors: extractedErrors,
  });
};
