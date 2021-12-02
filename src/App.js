import { useState } from 'react';
import './styles.css';
import InvoiceDetails from './components/InvoiceDetails';
import PositionsForm from './components/PositionsForm';
import InvoiceForm from './components/InvoiceForm';
import PositionsTable from './components/PositionsTable';
import Nav from './components/Nav';
import SellerDetails from './components/SellerDetails';
import ClientDetails from './components/ClientDetails';
import Notes from './components/Notes';
import PaymentDetails from './components/PaymentDetails';
import Sing from './components/Sing';

function App() {
    const [showInvoice, setShowInvoice] = useState(false);
    const toggleShowInvoice = () => setShowInvoice(!showInvoice);

    return (
        <>
            {showInvoice ? (
                <div>
                    <Nav />
                    <InvoiceDetails />
                    <section className='details'>
                        <SellerDetails />
                        <ClientDetails />
                    </section>
                    <PositionsTable />
                    <div className='details'>
                        <PaymentDetails />
                        <Notes />
                    </div>
                    <Sing />
                    <p className='annotation'>
                        Sprzedawca zwolniony podmiotowo z podatku od towarów i
                        usług [dostawa towarów lub świadczenie usług zwolnione
                        na podstawie art. 113 ust. 1(albo ust. 9) ustawy z dnia
                        11.03.2004 r. o podatku od towarów i usług (Dz.U. z
                        2016r. poz. 710, z późn. zm.)]
                    </p>
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
