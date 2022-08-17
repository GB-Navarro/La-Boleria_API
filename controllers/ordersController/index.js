
async function insertOrder(req,res){
    const {clientId,cakeId,quantity,totalPrice} = req.body;
    res.send("Hello World!");
}

const ordersController = {
    insertOrder
}

export default ordersController;