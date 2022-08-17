import Joi from "joi";

//ver se o price pode ser menor que 0 ou não

const insertCakeSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().greater(0).required(),
    image: Joi.string().uri().min(4).required(),
    description: Joi.string().allow('').allow(null).required()
})

const cakesSchemas = {
    insertCakeSchema
}

export default cakesSchemas;