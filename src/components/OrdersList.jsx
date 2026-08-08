export default function OrdersList({ orders }) {
    return (
        <div>
            <h2>Lista Zleceń Serwisowych</h2>
            <ul className="order-list">
                {orders.map(order => (
                    <li key={order.id} className="order-card">
                        <div className="order-card-header">
                            <strong>Zlecenie #{order.id}</strong>
                            <span className="status-badge">{order.status}</span>
                        </div>
                        <p>{order.description}</p>
                        <small>Cena: {order.price} PLN</small>
                    </li>
                ))}
            </ul>
        </div>
    );
}