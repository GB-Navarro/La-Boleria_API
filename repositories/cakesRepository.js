import connection from "./../dbStrategy/postgres.js";

async function searchCakeName(name){
    const result = await connection.query('SELECT * FROM cakes WHERE name = $1',[name]);
    return result;
}

async function insertCake(name,price,image,description){
    const result = await connection.query('INSERT INTO cakes (name,price,image,description) VALUES ($1,$2,$3,$4)',[name,price,image,description]);
    return result;
}

const cakesRepository = {
    searchCakeName,
    insertCake
}

export default cakesRepository;