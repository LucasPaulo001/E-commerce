import { body } from "express-validator";

export const registerValidations = () => {
    return[
        body("name")
        .isString()
        .withMessage("O nome é obrigatório."),

        body("email")
        .isEmail()
        .withMessage("O E-mail é obrigatório."),

        body("password")
        .isString()
        .withMessage("A senha é obrigatória.")
        .isLength({ min: 6 })
        .withMessage("A senha precisa ter no mínimo 6 caracteres."),

        body('phone').
        matches(/^\d{10,11}$/).
        withMessage('Telefone inválido'),
    ]
}

export const loginValidations = () => {
    return[
        body("email")
        .isEmail()
        .withMessage("O E-mail é obrigatório."),

        body("password")
        .isString()
        .withMessage("A senha é obrigatória.")
        .isLength({ min: 6 })
        .withMessage("A senha precisa ter no mínimo 6 caracteres."),
    ]
}