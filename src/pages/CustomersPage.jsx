import { useState, useEffect } from 'react';
import CustomersList from '../components/CustomersList';
import { fetchAllCustomers } from '../api/customersApi';

export default function CustomerPage() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCustomers = async () => {
            try {
                const data = await fetchAllCustomers();
                setCustomers(data);
                setLoading(false);
            } catch (error) {
                console.error("Błąd pobierania listy klientów:", error);
                setLoading(false);
            }
        };
        loadCustomers();
    }, []);

    return (
        <div>
            <h2> Baza KLientów</h2>
            <p className="text-muted"> Poniżej znajduje się lista wszystkich klientów zarejestrowanych w systemie.</p>
            {loading ? <p>Ładowanie klientów...</p> : <CustomersList customers={customers} />}
        </div>
    );
}