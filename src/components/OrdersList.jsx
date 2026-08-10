export default function OrdersList({ orders = [], onStatusChange }) {
    return (
        <ul className="order-list">
            {orders.map((order) => (
                <li key={order.id} className="order-card">
                    <div className="order-card-header">
                        <strong>Zlecenie #{order.id}</strong>
                        
                        <select 
                            className={`status-select ${order.status}`} 
                            value={order.status}
                            onChange={(e) => onStatusChange(order.id, e.target.value)}
                        >
                            <option value="NEW">Nowe</option>
                            <option value="IN_PROGRESS">W naprawie</option>
                            <option value="WAITING_FOR_PARTS">Czeka na części</option>
                            <option value="READY">Gotowe do odbioru</option>
                            <option value="RETURNED">Zwrócone klientowi</option>
                        </select>
                    </div>

                    <div className="order-description">
                        {order.description}
                    </div>

                    <div className="order-details-grid">
                        <div className="details-section">
                            <h4>Sprzęt (ID: {order.device?.id})</h4>
                            <p><strong>Marka:</strong> {order.device?.brand}</p>
                            <p><strong>Model:</strong> {order.device?.model}</p>
                            <p><strong>Numer Seryjny:</strong> {order.device?.serialNumber}</p>
                        </div>
                        <div className="details-section">
                            <h4>Klient</h4>
                            <p>{order.device?.customer?.firstName} {order.device?.customer?.lastName}</p>
                            <p>{order.device?.customer?.phoneNumber}</p>
                            <p>{order.device?.customer?.email}</p>
                        </div>
                    </div>

                    <div className="order-footer">
                        Wycena: <strong>{order.price.toFixed(2)} PLN</strong>
                    </div>
                </li>
            ))}
        </ul>
    );
}