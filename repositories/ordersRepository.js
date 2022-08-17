import connection from "./../dbStrategy/postgres.js";

async function checkClientIdExistence(clientId){
    const result = await connection.query('SELECT * FROM clients WHERE id = $1',[clientId]);
    return result;
}

async function checkCakeIdExistence(cakeId){
    const result = await connection.query('SELECT * FROM cakes WHERE id = $1',[cakeId]);
    return result;
}

async function insertOrder(clientId, cakeId, quantity, totalPrice){
    const result = await connection.query('INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1,$2,$3,$4)',[clientId, cakeId, quantity, totalPrice]);
    return result;
}

async function getOrders(){
    const result = await connection.query('SELECT orders.id as "orderId", "createdAt", quantity, "totalPrice", cakes.id as "cakeId", cakes.name as "cakeName", cakes.price as "cakePrice", cakes.description as "cakeDescription", cakes.image as "cakeImage", clients.id as "clientId", clients.name as "clientName", clients.adress as "clientAdress", clients.phone as "clientPhone" FROM orders JOIN cakes ON cakes.id = orders."cakeId" JOIN clients ON clients.id = orders."clientId"');
    return result;
}

const ordersRepository = {
    checkClientIdExistence,
    checkCakeIdExistence,
    insertOrder,
    getOrders
}

export default ordersRepository;