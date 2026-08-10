export default function CustomersList({ customers = []}) {
    if (customers.length === 0) {
        return <p>Brak klientów w bazie.</p>
    }

    return (
        <div className="table-responsive">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imię</th>
                        <th>Nazwisko</th>
                        <th>Email</th>
                        <th>Telefon</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.firstName}</td>
                            <td><strong>{customer.lastName}</strong></td>
                            <td>{customer.email}</td>
                            <td>{customer.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}