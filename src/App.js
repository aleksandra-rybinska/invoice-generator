import { useState } from 'react';
import './styles.css';
import InvoiceDetails from './components/InvoiceDetails';
import PositionsForm from './components/PositionsForm';
import InvoiceForm from './components/InvoiceForm';
import PositionsTable from './components/PositionsTable';

function App() {
    const [showInvoice, setShowInvoice] = useState(false);
    const toggleShowInvoice = () => setShowInvoice(!showInvoice);

    return (
        <>
            {showInvoice ? (
                <div>
                    <InvoiceDetails />
                    <PositionsTable />
                    <button onClick={toggleShowInvoice}>Edycja</button>
                </div>
            ) : (
                <div>
                    <InvoiceForm />
                    <br />
                    <br />
                    <PositionsForm />
                    <PositionsTable />
                    <button onClick={toggleShowInvoice}>Podgląd</button>
                </div>
            )}
        </>
    );
}

export default App;
