import React from 'react';
import InvoiceDetails from './InvoiceDetails';
import SellerDetails from './SellerDetails';
import ClientDetails from './ClientDetails';
import Notes from './Notes';
import PaymentDetails from './PaymentDetails';
import Sing from './Sing';
import PositionsTable from './PositionsTable';

export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <InvoiceDetails />
            <section className='details'>
                <SellerDetails />
                <ClientDetails />
            </section>
            <PositionsTable />
            <div className='payments'>
                <PaymentDetails />
                <Notes />
            </div>
            <Sing />
            <p className='annotation'>
                Sprzedawca zwolniony podmiotowo z podatku od towarów i usług
                [dostawa towarów lub świadczenie usług zwolnione na podstawie
                art. 113 ust. 1(albo ust. 9) ustawy z dnia 11.03.2004 r. o
                podatku od towarów i usług (Dz.U. z 2016r. poz. 710, z późn.
                zm.)]
            </p>
        </div>
    );
});
