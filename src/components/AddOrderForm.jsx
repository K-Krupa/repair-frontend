import { useState } from 'react';
import { createOrder } from '../api/ordersApi';

export default function AddOrderForm({ onOrderAdded }) {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [deviceId, setDeviceId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const newOrder = {
            description,
            price: parseFloat(price),
            device: { id: parseInt(deviceId) }
        };

        try {
            await createOrder(newOrder);

            onOrderAdded();
            setDescription('');
            setPrice('');
            setDeviceId('');
        } catch (error) {
            console.error("Błąd sieci: ", error);
            alert("Bląd podczas dodawania zlecenia.");
        }
    };

    return (
        <div className="form-container">
            <h3>Dodaj nowe zlecenie </h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Opis usterki:</label>
                    <textarea value = {description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                
                <div className="form-group">
                    <label>Cena naprawy (PLN):</label>
                    <input type="number" value = {price} onChange={(e) => setPrice(e.target.value)} required />
                </div>

                <div className="form-group">
                    <label>ID Sprzętu Klienta:</label>
                    <input type="number" value = {deviceId} onChange={(e) => setDeviceId(e.target.value)} required />
                </div>

                <button type="submit" className="btn-submit">Dodaj zlecenie</button>
            </form>
        </div>
    );
}