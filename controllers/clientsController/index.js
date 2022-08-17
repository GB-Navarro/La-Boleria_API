import clientsRepository from "./../../repositories/clientsRepository.js";

async function insertClient(req,res){
    const {name, adress, phone} = req.body;
    try{
        const result = await clientsRepository.insertClient(name, adress, phone);
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

const clientsController = {
    insertClient
}

export default clientsController;