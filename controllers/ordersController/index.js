import ordersRepository from "./../../repositories/ordersRepository.js";

async function insertOrder(req,res){
    const {clientId,cakeId,quantity,totalPrice} = req.body;
    try{
        const result = await ordersRepository.insertOrder(clientId, cakeId, quantity, totalPrice);
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

const ordersController = {
    insertOrder
}

export default ordersController;