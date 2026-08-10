import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-brand'> SerwisApp </div>
            <div className='navbar-links'>
                <Link to="/">Zlecenia</Link>
                <Link to="/devices">Sprzęt</Link>
                <Link to="/customers">Klienci</Link>
            </div>
        </nav>
    )
}