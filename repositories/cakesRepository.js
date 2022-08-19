import connection from "./../dbStrategy/postgres.js";

async function searchCakeName(name){
    const result = await connection.query('SELECT * FROM cakes WHERE name = $1',[name]);
    return result;
}

async function insertCake(name,price,image,description,flavourId){
    const result = await connection.query('INSERT INTO cakes (name,price,image,description,"flavourId") VALUES ($1,$2,$3,$4,$5)',[name,price,image,description,flavourId]);
    return result;
}

async function checksIfFlavourIdExists(id){
    const result = await connection.query('SELECT * FROM flavours WHERE id = $1',[id]);
    return result;
}

const cakesRepository = {
    searchCakeName,
    insertCake,
    checksIfFlavourIdExists
}

export default cakesRepository;