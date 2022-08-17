import clientsSchemas from "../schemas/clientsSchemas.js";

export function validateInsertClientSchema(req, res, next){
    const data = req.body;
    const validateSchema = clientsSchemas.insertClientSchema.validate(data);
    if(validateSchema.error === undefined){
        next();
    }else{
        const { phone } = data;

        const error = validateSchema.error.details[0].message;

        const nameRequiredError = '"name" is required';
        const nameEmptyError = '"name" is not allowed to be empty';
        const nameTypeError = '"name" must be a string';

        const adressRequiredError = '"adress" is required';
        const adressEmptyError = '"adress" is not allowed to be empty';
        const adressTypeError = '"adress" must be a string';

        const phoneRequiredError = '"phone" is required';
        const phoneEmptyError = '"phone" is not allowed to be empty';
        const phoneTypeError = '"phone" must be a string'
        const phoneMinLengthError = '"phone" length must be at least 10 characters long';
        const phoneMaxLengthError = '"phone" length must be less than or equal to 11 characters long';
        const phoneRegexError = `"phone" with value "${phone}" fails to match the required pattern: /^[0-9]{10,11}$/`
        
        if(error === nameRequiredError || error === nameEmptyError || nameTypeError){
            res.sendStatus(400);
        }else if(error === adressRequiredError || error === adressEmptyError || error === adressTypeError){
            res.sendStatus(400);
        }else if(error === phoneRequiredError || error === phoneEmptyError || error === phoneTypeError || error === phoneMinLengthError || error === phoneMaxLengthError){
            res.sendStatus(400);
        }else if(error === phoneRegexError){
            res.sendStatus(400);
        }
    }
}