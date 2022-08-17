import connection from "./../dbStrategy/postgres.js";

async function insertClient(name, adress, phone){
    const result = await connection.query('INSERT INTO clients (name, adress, phone) VALUES ($1,$2,$3)',[name,adress,phone]);
    return result;
}

const clientsRepository = {
    insertClient
}

export default clientsRepository;