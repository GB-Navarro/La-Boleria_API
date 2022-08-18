import connection from "./../dbStrategy/postgres.js";

async function checksIfFlavourExists(name){
    const result = await connection.query('SELECT * FROM flavours WHERE name = $1',[name]);
    return result;
}

async function insertFlavour(name){
    const result = await connection.query('INSERT INTO flavours (name) VALUES ($1)',[name]);
    return result;
}


const flavoursRepository = {
    checksIfFlavourExists,
    insertFlavour
}

export default flavoursRepository;