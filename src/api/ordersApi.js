const BASE_URL = 'http://localhost:8080/api';

export const fetchAllOrders = async () => {
    const response = await fetch(`${BASE_URL}/orders`);
    if (!response.ok) throw new Error("Błąd podczas pobierania zleceń");
    return await response.json();
};

export const createOrder = async (orderData) => {
    const response = await fetch(`${BASE_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(orderData)
    });
    if (!response.ok) throw new Error("Błąd podczas dodawania zlecenia");
    return response;
};

export const updateOrderStatus = async (orderId, newStatus) => {
    const response = await fetch(`${BASE_URL}.orders/${orderId}/status?status=${newStatus}`, {
        method: 'PATCH'
    });
    if(!response.ok) throw new Error("Błąd podczas zmiany statusu");
    return await response.json();
}