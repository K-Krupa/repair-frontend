import { useState, useEffect } from 'react';
import OrdersList from '../components/OrdersList';
import AddOrderForm from '../components/AddOrderForm';
import { fetchAllOrders, updateOrderStatus } from '../api/ordersApi';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadOrders = async () => {
    try {
        const data = await fetchAllOrders(); 
        setOrders(data);
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
      {loading ? <p>Ładowanie zleceń...</p> : <OrdersList orders={orders} onStatusChange={handleStatusChange} />}
    </div>
  );
}