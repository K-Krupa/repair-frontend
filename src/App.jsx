import { useState, useEffect } from 'react';
import './App.css';
import OrdersList from './components/OrdersList';
import AddOrderForm from './components/AddOrderForm';

function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = () => {
    fetch('http://localhost:8080/api/orders')
        .then(response => response.json())
        .then(data => {
            setOrders(data);
            setLoading(false);
        })
        .catch(error => console.error("Błąd:", error));
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h1>System Zarządzania Zleceniami Serwisowymi</h1>
      <hr />
      <AddOrderForm onOrderAdded={fetchOrders} />   
      {loading ? <p>Ładowanie zleceń...</p> : <OrdersList orders={orders} />}
      
    </div>
  );
}

export default App;