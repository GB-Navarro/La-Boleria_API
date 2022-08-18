function formatResponse(orders){
    const response = orders.map((order) => {
        return formatOrders(order);
    })
    return response;
}

function formatOrders(data){
    const { orderId, createdAt, quantity, totalPrice, cakeId, cakeName, cakePrice, cakeDescription, cakeImage, clientId, clientName, clientAdress, clientPhone } = data;
    const cake = formatCakeData(cakeId, cakeName, cakePrice, cakeDescription, cakeImage);
    const client = formatClientData(clientId, clientName, clientAdress, clientPhone);
    const orders = {
        client,
        cake,
        orderId: orderId,
        createdAt: createdAt,
        quantity: quantity,
        totalPrice: totalPrice
    }
    return orders;
}

function formatCakeData(cakeId, cakeName, cakePrice, cakeDescription, cakeImage){
    const cake = {
        id: cakeId,
        name: cakeName,
        price: cakePrice,
        description: cakeDescription,
        image: cakeImage
    }
    return cake;
}

function formatClientData(clientId, clientName, clientAdress, clientPhone){
    const client = {
        id: clientId,
        name: clientName,
        adress: clientAdress,
        phone: clientPhone
    }
    return client;
}

const ordersControllerFunctions = {
    formatResponse
}

export default ordersControllerFunctions