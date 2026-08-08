import { useState } from 'react';

export default function AddOrderForm({ onOrderAdded }) {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [deviceId, setDeviceId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        const newOrder = {
            description: description,
            price: parseFloat(price),
            device: { id: parseInt(deviceId) }
        };

        fetch('http://localhost:8080/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
        .then(response => {
            if (response.ok) {
                onOrderAdded();
                
                setDescription('');
                setPrice('');
                setDeviceId('');
            } else {
                alert("Błąd podczas dodawania zlecenia.");
            }
        })
        .catch(error => console.error("Błąd sieci:", error));
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