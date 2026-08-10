import { useState, useEffect } from 'react';
import OrdersList from '../components/OrdersList';
import AddOrderForm from '../components/AddOrderForm';
import { fetchAllOrders, updateOrderStatus } from '../api/apiClient';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    try {
        const data = await fetchAllOrders(); 
        const sortedData = data.sort((a, b) => a.id - b.id);
        setOrders(sortedData);
        setLoading(false);
    } catch (error) {
        console.error("Błąd:", error);
        setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      loadOrders();
    } catch (error) {
      console.error("Błąd zmiany statusu: ", error);
      alert("Błąd podczas zmiany statusu!");
    }
  }

  return (
    <div>
      <AddOrderForm onOrderAdded={loadOrders} />   
      <h2>Baza Zleceń</h2>
      <p className="text-muted"> Poniżej znajduje się lista wszystkich zleceń zarejestrowanych w systemie.</p>
      {loading ? <p>Ładowanie zleceń...</p> : <OrdersList orders={orders} onStatusChange={handleStatusChange} />}
    </div>
  );
}