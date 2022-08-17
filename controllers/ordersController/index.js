import ordersRepository from "./../../repositories/ordersRepository.js";
import ordersControllerFunctions from "./functions/functions.js";

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

async function getOrders(req,res){
    console.log("query", req.querys);
    const result = await ordersRepository.getOrders();
    const orders = result.rows;
    const response = orders.map((order) => {
        return ordersControllerFunctions.formatOrders(order);
    })
    res.send(response);
}

const ordersController = {
    insertOrder,
    getOrders
}

export default ordersController;