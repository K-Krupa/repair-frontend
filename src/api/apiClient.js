const BASE_URL = import.meta.env.VITE_API_ULR || 'http://localhost:8080/api';

const fetchFromApi = async (endpoint, options = {}) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        
        throw {
            status: response.status,
            message: errorData?.message || "Wystąpił nieoczekiwany błąd serwera",
            fieldErrors: errorData?.fieldErrors || {}
        };
    }
    
    return response.json();
};

// ==========================================
//              CUSTOMERS
// ==========================================
export const fetchAllCustomers = () => fetchFromApi('/customers');

export const createCustomer = (customerData) => 
    fetchFromApi('/customers', {
        method: 'POST',
        body: JSON.stringify(customerData)
    });

// ==========================================
//              DEVICES
// ==========================================
export const fetchAllDevices = () => fetchFromApi('/devices');

export const createDevice = (deviceData) => 
    fetchFromApi('/devices', {
        method: 'POST',
        body: JSON.stringify(deviceData)
    });

// ==========================================
//              ORDERS
// ==========================================
export const fetchAllOrders = () => fetchFromApi('/orders');

export const createOrder = (orderData) => 
    fetchFromApi('/orders', {
        method: 'POST',
        body: JSON.stringify(orderData)
    });

export const updateOrderStatus = (orderId, newStatus) => 
    fetchFromApi(`/orders/${orderId}/status?status=${newStatus}`, {
        method: 'PATCH'
    });