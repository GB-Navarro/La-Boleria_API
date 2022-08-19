function formatResponse(orders){
    const response = orders.map((order) => {
        return formatOrders(order);
    })
    return response;
}

function formatOrders(data){
    const { orderId, createdAt, quantity, totalPrice, cakeId, cakeName, cakePrice, cakeDescription, cakeImage, clientId, clientName, clientAddress, clientPhone, flavour, isDelivered } = data;
    const cake = formatCakeData(cakeId, cakeName, cakePrice, cakeDescription, cakeImage, flavour);
    const client = formatClientData(clientId, clientName, clientAddress, clientPhone);
    const orders = {
        client,
        cake,
        orderId: orderId,
        createdAt: createdAt,
        quantity: quantity,
        totalPrice: totalPrice,
        isDelivered: isDelivered
    }
    return orders;
}

function formatCakeData(cakeId, cakeName, cakePrice, cakeDescription, cakeImage, flavour){
    const cake = {
        id: cakeId,
        name: cakeName,
        price: cakePrice,
        description: cakeDescription,
        image: cakeImage,
        flavour: flavour
    }
    return cake;
}

function formatClientData(clientId, clientName, clientAddress, clientPhone){
    const client = {
        id: clientId,
        name: clientName,
        address: clientAddress,
        phone: clientPhone
    }
    return client;
}

const ordersControllerFunctions = {
    formatResponse
}

export default ordersControllerFunctions