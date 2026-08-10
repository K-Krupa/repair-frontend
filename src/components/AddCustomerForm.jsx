import { useState } from 'react';
import { createCustomer } from '../api/apiClient';

export default function AddCustomerForm({ onCustomerAdded }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newCustomer = {
            firstName,
            lastName,
            email,
            phoneNumber
        };

        try {
            await createCustomer(newCustomer);
            onCustomerAdded(); 
            
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setErrors({});
        } catch (error) {
           if (error.fieldErrors) {
            setErrors(error.fieldErrors);
           } else {
            alert(error.message) || "Wystąpił nieoczekiwany błąd"
           }
        }
    };

    return (
        <div className="form-container">
            <h3>Dodaj nowego klienta</h3>
            <form onSubmit={handleSubmit} noValidate>
                <div className="order-details-grid">
                    <div className="form-group">
                        <label>Imię:</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        {errors.firstName && <span className="error-text">{errors.firstName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Nazwisko:</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                         {errors.lastName && <span className="error-text">{errors.lastName}</span>}
                    </div>
                    <div className="form-group">
                        <label>Adres E-mail:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label>Numer telefonu:</label>
                        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                         {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
                    </div>
                </div>
                <button type="submit" className="btn-submit">Zapisz Klienta</button>
            </form>
        </div>
    );
}