import Joi from "joi";

const insertOrdersSchema = Joi.object({
    clientId: Joi.number().required(),
    cakeId: Joi.number().required(),
    quantity: Joi.number().greater(0).less(5).allow(1,2,3,4).required(),
    totalPrice: Joi.number().greater(0).required()
})

const ordersSchemas = {
    insertOrdersSchema
}

export default ordersSchemas;