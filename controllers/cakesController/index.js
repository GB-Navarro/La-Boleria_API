import cakesRepository from "./../../repositories/cakesRepository.js";

async function insertCake(req,res){
    const {name,price,image,description} = req.body;
    try{
        const result = await cakesRepository.insertCake(name,price,image,description);
        if(result.rowCount === 1){
            res.sendStatus(201);
        }else{
            res.sendStatus(500);
        }
    }catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}

const cakesController = {
    insertCake
}

export default cakesController;