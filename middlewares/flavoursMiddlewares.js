import { insertFlavourSchema } from "../schemas/flavoursSchemas.js";

export function validateInsertFlavourData(req,res,next){
    const data = req.body;
    const validateSchema = insertFlavourSchema.validate(data);

    if(validateSchema.error === undefined){
        next();
    }else{

        const error = validateSchema.error.details[0].message;

        const nameRequiredError = '"name" is required';
        const nameEmptyError = '"name" is not allowed to be empty';
        const nameTypeError = '"name" must be a string';
        const nameLengthError = '"name" length must be at least 2 characters long'

        if(error === nameRequiredError || error === nameEmptyError || error === nameTypeError || error === nameLengthError){
            res.sendStatus(400);
        }
        
    }
}