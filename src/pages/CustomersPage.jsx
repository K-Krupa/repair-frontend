import { useState, useEffect } from 'react';
import CustomersList from '../components/CustomersList';
import AddCustomerForm from '../components/AddCustomerForm';
import { fetchAllCustomers } from '../api/apiClient';

export default function CustomerPage() {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadCustomers = async () => {
        try {
            const data = await fetchAllCustomers();
            setCustomers(data);
            setLoading(false);
        } catch (error) {
            console.error("Błąd pobierania klientów:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadCustomers();
    }, []);

    return (
        <div>
            <AddCustomerForm onCustomerAdded={loadCustomers} />
            <h2> Baza Klientów</h2>
            <p className="text-muted"> Poniżej znajduje się lista wszystkich klientów zarejestrowanych w systemie.</p>
            {loading ? <p>Ładowanie klientów...</p> : <CustomersList customers={customers} />}
        </div>
    );
}