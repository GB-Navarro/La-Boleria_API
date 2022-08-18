import flavoursRepository from "./../../repositories/flavoursRepository.js";

async function insertFlavour(req,res){
    const { name } = req.body;

    try{
        const result = await flavoursRepository.insertFlavour(name);
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

const flavoursController = {
    insertFlavour
}

export default flavoursController;