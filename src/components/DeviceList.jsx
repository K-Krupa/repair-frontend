export default function DeviceList({ devices = []}) {
    if(devices.length === 0) {
        return <p>Brak sprzętu w bazie. Dodaj pierwsze urządzenie!</p>;
    }

    return (
        <div className="table-responsive">
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Typ</th>
                        <th>Marka i model</th>
                        <th>Numer Seryjny</th>
                        <th>Właściciel</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device => (
                        <tr key={device.id}>
                            <td>{device.id}</td>
                            <td>{device.deviceType}</td>
                            <td><strong>{device.brand}</strong> {device.model}</td>
                            <td>{device.serialNumber}</td>
                            <td>
                                {device.customer ? `${device.customer.firstName} ${device.customer.lastName}` : "Brak"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}