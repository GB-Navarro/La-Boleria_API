import Joi from "joi";

const insertClientSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    phone: Joi.string().min(10).max(11).pattern(/^[0-9]{10,11}$/).required()
})

const clientsSchemas = {
    insertClientSchema
}

export default clientsSchemas;