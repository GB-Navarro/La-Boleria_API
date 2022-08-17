import Joi from "joi";

const insertOrdersSchema = Joi.object({
    clientId: Joi.number().greater(0).required(), //ok
    cakeId: Joi.number().greater(0).required(), //ok
    //adicionar regex pattern no quantity ao invês de usar o allow
    quantity: Joi.number().greater(0).less(5).required(),
    totalPrice: Joi.number().greater(0).required()
})

const ordersSchemas = {
    insertOrdersSchema
}

export default ordersSchemas;