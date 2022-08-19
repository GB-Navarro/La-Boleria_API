import connection from "./../dbStrategy/postgres.js";

async function insertClient(name, address, phone){
    const result = await connection.query('INSERT INTO clients (name, address, phone) VALUES ($1,$2,$3)',[name,address,phone]);
    return result;
}

const clientsRepository = {
    insertClient
}

export default clientsRepository;