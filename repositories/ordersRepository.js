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

async function getOrdersByDate(date){
    const result = await connection.query('SELECT orders.id as "orderId", "createdAt", quantity, "totalPrice", cakes.id as "cakeId", cakes.name as "cakeName", cakes.price as "cakePrice", cakes.description as "cakeDescription", cakes.image as "cakeImage", clients.id as "clientId", clients.name as "clientName", clients.adress as "clientAdress", clients.phone as "clientPhone" FROM orders JOIN cakes ON cakes.id = orders."cakeId" JOIN clients ON clients.id = orders."clientId" WHERE CAST(orders."createdAt" AS VARCHAR) LIKE $1',[date]);
    //como usar as aspas de forma correta nessa query ?
    return result
}

async function checkOrderIdExistence(id){
    const result = await connection.query('SELECT * FROM orders WHERE id = $1',[id]);
    return result;
}

async function getOrderById(id){
    const result = await connection.query('SELECT orders.id as "orderId", "createdAt", quantity, "totalPrice", cakes.id as "cakeId", cakes.name as "cakeName", cakes.price as "cakePrice", cakes.description as "cakeDescription", cakes.image as "cakeImage", clients.id as "clientId", clients.name as "clientName", clients.adress as "clientAdress", clients.phone as "clientPhone" FROM orders JOIN cakes ON cakes.id = orders."cakeId" JOIN clients ON clients.id = orders."clientId" WHERE orders.id = $1',[id])
    return result;
}

async function getOrdersByClientId(id){
    const result = await connection.query('SELECT orders.id as "orderId", orders.quantity, orders."createdAt", orders."totalPrice", cakes.name as "cakeName" FROM orders JOIN cakes ON orders."cakeId" = cakes.id WHERE orders."clientId" = $1',[id]);
    return result;
}

const ordersRepository = {
    checkClientIdExistence,
    checkCakeIdExistence,
    insertOrder,
    getOrders,
    getOrdersByDate,
    checkOrderIdExistence,
    getOrderById,
    getOrdersByClientId
}

export default ordersRepository;