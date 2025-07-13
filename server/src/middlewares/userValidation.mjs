import { body } from "express-validator";

export const registerValidations = () => {
    return[
        body("nome")
        .isEmpty()
        .withMessage("O nome é obrigatório."),

        body("email")
        .isEmail()
        .withMessage("O E-mail é obrigatório."),

        body("password")
        .isEmpty()
        .withMessage("A senha é obrigatória.")
        .isLength({ min: 6 })
        .withMessage("A senha precisa ter no mínimo 6 caracteres."),

        body('telefone').
        matches(/^\d{10,11}$/).
        withMessage('Telefone inválido'),

        body('cep')
        .matches(/^\d{5}-?\d{3}$/)
        .withMessage('CEP inválido'),
    ]
}