import Joi from "joi";

export const insertFlavourSchema = Joi.object({
    name: Joi.string().min(2).required()
})

