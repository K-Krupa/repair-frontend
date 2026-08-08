import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import OrdersPage from './pages/OrdersPage';
import CustomersPage from './pages/CustomersPage';

function App() {
  return (
    <Router>
      <div className="orders-container">
        <Navbar />
        <h1>System Zarządzania Zleceniami Serwisowymi</h1>
        <hr />

        <Routes>
          <Route path="/" element={<OrdersPage />} />
          <Route path="/customers" element={<CustomersPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;