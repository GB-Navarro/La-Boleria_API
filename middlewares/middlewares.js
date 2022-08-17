import cakesSchemas from "../schemas/cakesSchemas.js";

export function validateInsertCakeSchema(req, res, next){
    const data = req.body;
    const validateSchema = cakesSchemas.insertCakeSchema.validate(data);

    if(validateSchema.error === undefined){
        next();
    }else{
        const validateErrorMessage = validateSchema.error.details[0].message;
        const nameRequiredError = '"name" is required'
        const nameEmptyError = '"name" is not allowed to be empty';
        const nameLengthError = '"name" length must be at least 2 characters long';
        const priceRequiredError = '"price" is required'
        const priceEmptyError = '"price" is not allowed to be empty';
        const priceValueError = '"price" must be greater than 0';
        const descriptionRequiredError = '"description" is required'
        const descriptionTypeError = '"description" must be a string';
        const imageRequiredError = '"image" is required'
        const imageEmptyError = '"image" is not allowed to be empty';
        const imageInvalidUrlError = '"image" must be a valid uri'

        if(validateErrorMessage === nameRequiredError || validateErrorMessage === nameEmptyError || validateErrorMessage === nameLengthError){
            res.sendStatus(400);
        }else if(validateErrorMessage === priceRequiredError || validateErrorMessage === priceEmptyError || validateErrorMessage === priceValueError){
            res.sendStatus(400);
        }else if(validateErrorMessage === descriptionRequiredError || validateErrorMessage === descriptionTypeError){
            res.sendStatus(400);
        }else if(validateErrorMessage === imageRequiredError || validateErrorMessage === imageEmptyError || validateErrorMessage === imageInvalidUrlError){
            res.sendStatus(422);
        }
    }
}