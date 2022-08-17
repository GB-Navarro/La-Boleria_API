import ordersSchemas from "../schemas/ordersSchema.js";
import ordersRepository from "../repositories/ordersRepository.js";

export function validateInsertOrderSchema(req, res, next){

    const data = req.body;
    const validateSchema = ordersSchemas.insertOrdersSchema.validate(data);

    if(validateSchema.error === undefined){
        next();
    }else{
        const error = validateSchema.error.details[0].message;

        const clientIdRequiredError = '"clientId" is required';
        const clientIdEmptyError = '"clientId" is not allowed to be empty';
        const clientIdTypeError = '"clientId" must be a number';
        const clientIdIntegerError = '"clientId" must be an integer';
        const clientIdMinValueError = '"clientId" must be greater than 0';

        const cakeIdRequiredError = '"cakeId" is required';
        const cakeIdEmptyError = '"cakeId" is not allowed to be empty';
        const cakeIdTypeError = '"cakeId" must be a number';
        const cakeIdIntegerError = '"cakeId" must be an integer';
        const cakeIdMinValueError = '"cakeId" must be greater than 0';

        const quantityRequiredError = '"quantity" is required';
        const quantityEmptyError = '"quantity" is not allowed to be empty';
        const quantityTypeError = '"quantity" must be a number';
        const quantityIntegerError = '"quantity" must be an integer';
        const quantityMinValueError = '"quantity" must be greater than 0';
        const quantityMaxValueError = '"quantity" must be less than 5';
        
        const totalPriceRequiredError = '"totalPrice" is required';
        const totalPriceEmptyError = '"totalPrice" is not allowed to be empty';
        const totalPriceTypeError = '"totalPrice" must be a number';
        const totalPriceMinValueError = '"totalPrice" must be greater than 0';

        if(error === clientIdRequiredError || error === clientIdEmptyError || error === clientIdTypeError || error === clientIdIntegerError || error === clientIdMinValueError){
            res.sendStatus(400);
        }else if(error === cakeIdRequiredError || error === cakeIdEmptyError || error === cakeIdTypeError || error === cakeIdIntegerError || error === cakeIdMinValueError){
            res.sendStatus(400);
        }else if(error === quantityRequiredError || error === quantityEmptyError || error === quantityTypeError || error === quantityIntegerError || error === quantityMinValueError || error
             === quantityMaxValueError){
            res.sendStatus(400);
        }
        else if(error === totalPriceRequiredError || error === totalPriceEmptyError || error === totalPriceTypeError || error === totalPriceMinValueError){
            res.sendStatus(400);
        }
    }
}

export async function checksCakeAndClientExistence(req,res,next){
    const {clientId, cakeId} = req.body;
    const clientExists = await checkClientIdExistence(clientId);
    const cakeExists = await checkCakeIdExistence(cakeId);
    if(clientExists && cakeExists){
        next();
    }else{
        res.sendStatus(404);
    }
}

async function checkClientIdExistence(clientId){
    let clientExists;
    const result = await ordersRepository.checkClientIdExistence(clientId);
    if(result.rowCount === 1){
        clientExists = true;
        return clientExists;
    }else{
        clientExists = false;
        return clientExists;
    }
}

async function checkCakeIdExistence(cakeId){
    let cakeExists;
    const result = await ordersRepository.checkCakeIdExistence(cakeId);
    if(result.rowCount === 1){
        cakeExists = true;
        return cakeExists;
    }else{
        cakeExists = false;
        return cakeExists;
    }
}

export async function validateDataType(req,res,next){
    const {clientId, cakeId, quantity, totalPrice} = req.body;
    const isClientIdValid = isNumber(clientId);
    const isCakeIdValid = isNumber(cakeId);
    const isQuantityValid = isNumber(quantity);
    const isTotalPriceValid = isNumber(totalPrice);

    if(isClientIdValid && isCakeIdValid && isQuantityValid && isTotalPriceValid){
        next();
    }else{
        res.sendStatus(400);
    }

}

function isNumber(value){
    if(typeof(value) === 'number'){
        return true;
    }else{
        return false;
    }
}

