import { useState } from 'react';
import { createDevice } from '../api/apiClient';

export default function AddDeviceForm({ onDeviceAdded }) {
    const [deviceType, setDeviceType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newDevice = {
            deviceType,
            brand,
            model,
            serialNumber,
            customer: customerId ? { id: parseInt(customerId) } : null
        };

        try {
            await createDevice(newDevice);
            onDeviceAdded();

            setDeviceType('');
            setBrand('');
            setModel('');
            setSerialNumber('');
            setCustomerId('');
            setErrors({});
        } catch (error) {
            if (error.fieldErrors) {
                setErrors(error.fieldErrors);
            } else {
                alert(error.message || "Błąd: Nie udało się dodać sprzętu");
            }
        }
    };

    return (
        <div className='form-container'>
            <h3>Dodaj nowy sprzęt</h3>
            <form onSubmit={handleSubmit} noValidate>
                <div className='order-details-grid'>
                    <div className='form-group'>
                        <label>Typ Sprzętu</label>
                        <input type="text" value={deviceType} onChange={(e) => setDeviceType(e.target.value)} required />
                        {errors.deviceType && <span className="error-text">{errors.deviceType}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Marka</label>
                        <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                        {errors.brand && <span className="error-text">{errors.brand}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Model</label>
                        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required />
                        {errors.model && <span className="error-text">{errors.model}</span>}
                    </div>
                    <div className='form-group'>
                        <label>Numer Seryjny</label>
                        <input type="text" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} required />
                        {errors.serialNumber && <span className="error-text">{errors.serialNumber}</span>}
                    </div>
                    <div className='form-group'>
                        <label>ID Klienta (Właściciela)</label>
                        <input type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />
                        {(errors.customer || errors['customer.id']) && <span className="error-text">{errors.customer || errors['customer.id']}</span>}
                    </div>
                </div>
                <button type="submit" className='btn-submit'>Zapisz Sprzęt</button>
            </form>
        </div>
    );
}