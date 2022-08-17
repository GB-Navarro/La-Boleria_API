import Joi from "joi";

const insertClientSchema = Joi.object({
    name: Joi.string().min(1).required(),
    adress: Joi.string().min(1).required(),
    phone: Joi.string().min(10).max(11).required()
})

const clientsSchemas = {
    insertClientSchema
}

export default clientsSchemas;