import { validationResult } from "express-validator";

export const validation = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];

  errors.array().map((err) => extractedErrors.push(err));

  res.status(422).json({
    errors: extractedErrors,
  });
};
