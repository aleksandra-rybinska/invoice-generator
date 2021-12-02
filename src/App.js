import { useState } from 'react';
import './App.css';
import InvoiceDetails from './components/InvoiceDetails';
import PositionsForm from './components/PositionsForm';
import InvoiceForm from './components/InvoiceForm';

function App() {
    const [showInvoice, setShowInvoice] = useState(false);
    const toggleShowInvoice = () => setShowInvoice(!showInvoice);

    return (
        <>
            {showInvoice ? (
                <div>
                    <InvoiceDetails />
                    <button onClick={toggleShowInvoice}>Edycja</button>
                </div>
            ) : (
                <div>
                    <InvoiceForm />
                    <br />
                    <br />
                    <PositionsForm />
                    <button onClick={toggleShowInvoice}>Podgląd</button>
                </div>
            )}
        </>
    );
}

export default App;
