import { useState } from 'react';
import { createOrder } from '../api/apiClient';

export default function AddOrderForm({ onOrderAdded }) {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [deviceId, setDeviceId] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const newOrder = {
            description,
            price: price ? parseFloat(price) : null,
            device: deviceId ? { id: parseInt(deviceId) } : null
        };

        try {
            await createOrder(newOrder);

            onOrderAdded();
            setDescription('');
            setPrice('');
            setDeviceId('');
            setErrors({});
        } catch (error) {
            if (error.fieldErrors) {
                setErrors(error.fieldErrors);
            } else {
                alert(error.message || "Błąd podczas dodawania zlecenia.");
            }
        }
    };

    return (
        <div className="form-container">
            <h3>Dodaj nowe zlecenie </h3>
            <form onSubmit={handleSubmit} noValidate>
                <div className='order-details-grid'>
                    <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                        <label>Opis usterki:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                        {errors.description && <span className="error-text">{errors.description}</span>}
                    </div>
                    
                    <div className="form-group">
                        <label>Cena naprawy (PLN):</label>
                        <input type="number" value={price} step="0.01" onChange={(e) => setPrice(e.target.value)} required />
                        {errors.price && <span className="error-text">{errors.price}</span>}
                    </div>

                    <div className="form-group">
                        <label>ID Sprzętu Klienta:</label>
                        <input type="number" value={deviceId} onChange={(e) => setDeviceId(e.target.value)} required />
                        {(errors.device || errors['device.id']) && <span className="error-text">{errors.device || errors['device.id']}</span>}
                    </div>
                </div>
                <button type="submit" className="btn-submit">Dodaj zlecenie</button>
            </form>
        </div>
    );
}