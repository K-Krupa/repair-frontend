const BASE_URL = 'http://localhost:8080/api';

export const fetchAllCustomers = async () => {
    const response = await fetch(`${BASE_URL}/customers`);
    if (!response.ok) throw new Error("Błąd podczas pobierania listy klientów");
    return await response.json();
}