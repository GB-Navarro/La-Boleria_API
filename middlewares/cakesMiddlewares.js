import cakesSchemas from "../schemas/cakesSchemas.js";
import cakesRepository from "../repositories/cakesRepository.js";

export function validateInsertCakeSchema(req, res, next){
    const data = req.body;
    const validateSchema = cakesSchemas.insertCakeSchema.validate(data);

    if(validateSchema.error === undefined){
        next();
    }else{

        const error = validateSchema.error.details[0].message;

        const nameRequiredError = '"name" is required';
        const nameEmptyError = '"name" is not allowed to be empty';
        const nameTypeError = '"name" must be a string';
        const nameLengthError = '"name" length must be at least 2 characters long';
        

        const priceRequiredError = '"price" is required';
        const priceEmptyError = '"price" is not allowed to be empty';
        const priceValueError = '"price" must be greater than 0';

        const descriptionRequiredError = '"description" is required';
        const descriptionTypeError = '"description" must be a string';

        const imageRequiredError = '"image" is required';
        const imageEmptyError = '"image" is not allowed to be empty';
        const imageTypeError = '"image" must be a string';
        const imageInvalidUrlError = '"image" must be a valid uri';
        
        const flavourIdRequiredError = '"flavourId" is required';
        const flavourIdEmptyError = '"flavourId" is not allowed to be empty';
        const flavourIdTypeError = '"flavourId" must be a number';
        const flavourIdIntegerError = '"flavourId" must be an integer';

        if(error === nameRequiredError || error === nameEmptyError || error === nameTypeError || error === nameLengthError){
            res.sendStatus(400);
        }else if(error === priceRequiredError || error === priceEmptyError || error === priceValueError){
            res.sendStatus(400);
        }else if(error === descriptionRequiredError || error === descriptionTypeError){
            res.sendStatus(400);
        }else if(error === imageRequiredError || error === imageEmptyError || error === imageTypeError || error === imageInvalidUrlError){
            res.sendStatus(422);
        }else if(error === flavourIdRequiredError || error === flavourIdEmptyError || error === flavourIdTypeError || error === flavourIdIntegerError){
            res.sendStatus(400);
        }
    }
}

export async function verifyCakeNameValidity(req,res,next){
    const {name} = req.body;
    try{
        const result = await cakesRepository.searchCakeName(name);
        if(result.rowCount > 0){
            res.sendStatus(409);
        }else{
            next();
        }
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

export async function validateDataType(req,res,next){
    const {price, flavourId} = req.body;
    const isPriceValid = isNumber(price);
    const isFlavourIdValid = isNumber(flavourId);
    if(isPriceValid && isFlavourIdValid){
        next();
    }else{
        console.log("Os campos price e flavourId devem ser compostos por n??meros");
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

export async function checksIfFlavourIdExists(req,res,next){
    const { flavourId } = req.body;
    try{
        const result = await cakesRepository.checksIfFlavourIdExists(flavourId);
        if(result.rowCount === 1){
            next();
        }else{
            res.sendStatus(404);
        }
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}