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
    const { date } = req.query
    if(date === undefined){
        const result = await ordersRepository.getOrders();
        const orders = result.rows;
        const response = ordersControllerFunctions.formatResponse(orders);
        if(response.length === 0){
            res.status(404).send([]);
        }else{
            res.status(200).send(response);
        }
    }else{
        const result = await ordersRepository.getOrdersByDate(date);
        const orders = result.rows;
        const response = ordersControllerFunctions.formatResponse(orders);
        if(response.length === 0){
            res.status(404).send([]);
        }else{
            res.status(200).send(response);
        }
    }   
}

async function getOrderById(req,res){
    const { id } = req.params;
    const result = await ordersRepository.getOrderById(id);
    const order = result.rows;
    const response = ordersControllerFunctions.formatResponse(order);
    res.status(200).send(response[0]);
}

async function getOrdersByClientId(req,res){
    const { id } = req.params;
    const result = await ordersRepository.getOrdersByClientId(id);
    const orders = result.rows;
    if(orders.length === 0){
        res.status(404).send([]);
    }else{
        res.status(200).send(orders);
    }
}

const ordersController = {
    insertOrder,
    getOrders,
    getOrderById,
    getOrdersByClientId
}

export default ordersController;