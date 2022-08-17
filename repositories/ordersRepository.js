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

const ordersRepository = {
    checkClientIdExistence,
    checkCakeIdExistence,
    insertOrder
}

export default ordersRepository;