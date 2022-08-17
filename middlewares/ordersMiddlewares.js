import ordersSchemas from "../schemas/ordersSchema.js";

export function validateInsertOrderSchema(req, res, next){
    const data = req.body;
    const validateSchema = ordersSchemas.insertOrdersSchema.validate(data);
    if(validateSchema.error === undefined){
        next();
    }else{
        const { phone } = data;
        const validateErrorMessage = validateSchema.error.details[0].message;
        const clientIdRequiredError = '"clientId" is required';
        const clientIdEmptyError = '"clientId" is not allowed to be empty';
        const clientIdTypeError = '"clientId" must be a number';
        const clientIdMinValueError = '"clientId" must be greater than 0';
        const cakeIdRequiredError = '"cakeId" is required';
        const cakeIdEmptyError = '"cakeId" is not allowed to be empty';
        const cakeIdTypeError = '"cakeId" must be a number';
        const cakeIdMinValueError = '"cakeId" must be greater than 0';
        const totalPriceRequiredError = '"totalPrice" is required';
        const totalPriceEmptyError = '"totalPrice" is not allowed to be empty';
        const totalPriceTypeError = '"totalPrice" must be a number';
        const totalPriceMinValueError = '"totalPrice" must be greater than 0';

        /*
        const phoneMinLengthError = '"phone" length must be at least 10 characters long';
        const phoneMaxLengthError = '"phone" length must be less than or equal to 11 characters long';
        const phoneRegexError = `"phone" with value "${phone}" fails to match the required pattern: /[^0-9]{10,11}$/`
        */

        if(validateErrorMessage === clientIdRequiredError || validateErrorMessage === clientIdEmptyError || validateErrorMessage === clientIdTypeError || validateErrorMessage === clientIdMinValueError){
            res.sendStatus(400);
        }else if(validateErrorMessage === cakeIdRequiredError || validateErrorMessage === cakeIdEmptyError || validateErrorMessage === cakeIdTypeError || validateErrorMessage === cakeIdMinValueError){
            res.sendStatus(400);
        }/*else if(){

        }*/
        else if(validateErrorMessage === totalPriceRequiredError || validateErrorMessage === totalPriceEmptyError || validateErrorMessage === totalPriceTypeError || validateErrorMessage === totalPriceMinValueError){
            res.sendStatus(400);
        }
    }
}