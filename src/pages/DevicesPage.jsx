import { useState, useEffect } from 'react';
import AddDeviceForm from '../components/AddDeviceForm';
import DeviceList from '../components/DeviceList';
import { fetchAllDevices } from '../api/apiClient';

export default function DevicesPage() {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadDevices = async () => {
        try {
            const data = await fetchAllDevices();
            setDevices(data);
            setLoading(false);
        } catch (error) {
            console.error("Błąd pobierania sprzętu: ", error);
            setLoading(false);
        }
    };

    useEffect (() => {
        loadDevices ();
    }, []);

    return(
        <div>
            <AddDeviceForm onDeviceAdded={loadDevices} />
            <h2>Baza Sprzętu</h2>
            <p className='text-muted'>Zarządzaj urządzeniami i przypisuj je do klientów.</p>
            {loading ? <p>Ładowanie sprzętu...</p> : <DeviceList devices={devices} />}
        </div>
    )
}