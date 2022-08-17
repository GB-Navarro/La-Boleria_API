import connection from "./../dbStrategy/postgres.js";

async function checkClientIdExistence(clientId){
    const result = await connection.query('SELECT * FROM clients WHERE id = $1',[clientId]);
    return result;
}

async function checkCakeIdExistence(cakeId){
    const result = await connection.query('SELECT * FROM cakes WHERE id = $1',[cakeId]);
    return result;
}

const ordersRepository = {
    checkClientIdExistence,
    checkCakeIdExistence
}

export default ordersRepository;