import connection from "./../dbStrategy/postgres.js";

async function searchCakeName(name){
    const result = await connection.query('SELECT * FROM cakes WHERE name = $1',[name]);
    return result;
}

const cakesRepository = {
    searchCakeName
}

export default cakesRepository;