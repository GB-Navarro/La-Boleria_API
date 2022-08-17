import clientsSchemas from "../schemas/clientsSchemas.js";

export function validateInsertClientSchema(req, res, next){
    const data = req.body;
    const validateSchema = clientsSchemas.insertClientSchema.validate(data);
    if(validateSchema.error === undefined){
        next();
    }else{
        const validateErrorMessage = validateSchema.error.details[0].message;
        const nameRequiredError = '"name" is required';
        const nameEmptyError = '"name" is not allowed to be empty';
        const adressRequiredError = '"adress" is required';
        const adressEmptyError = '"adress" is not allowed to be empty';
        const phoneRequiredError = '"phone" is required';
        const phoneEmptyError = '"phone" is not allowed to be empty';
        const phoneMinLengthError = '"phone" length must be at least 10 characters long';
        const phoneMaxLengthError = '"phone" length must be less than or equal to 11 characters long';

        if(validateErrorMessage === nameRequiredError || validateErrorMessage === nameEmptyError){
            res.sendStatus(400);
        }else if(validateErrorMessage === adressRequiredError || validateErrorMessage === adressEmptyError){
            res.sendStatus(400);
        }else if(validateErrorMessage === phoneRequiredError || validateErrorMessage === phoneEmptyError || validateErrorMessage === phoneMinLengthError || validateErrorMessage === phoneMaxLengthError){
            //adicionar aqui o erro caso haja algum caractere não numérico na string phone
            res.sendStatus(400);
        }
        
    }
}