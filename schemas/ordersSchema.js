import Joi from "joi";

const insertOrdersSchema = Joi.object({
    clientId: Joi.number().integer().greater(0).required(),
    cakeId: Joi.number().integer().greater(0).required(), 
    quantity: Joi.number().integer().greater(0).less(5).required(),
    totalPrice: Joi.number().greater(0).required()
})

const ordersSchemas = {
    insertOrdersSchema
}

export default ordersSchemas;