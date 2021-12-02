import { useInvoice } from '../AppContext';

const InvoiceDetails = () => {
    const { invoiceData } = useInvoice();
    console.log('invoiceData', invoiceData);
    return (
        <section className='date'>
            <ul>
                <li>
                    <h1>Faktura</h1>
                </li>
                <li>
                    <p>
                        nr: &nbsp;
                        {invoiceData.invNum}
                    </p>
                </li>
                <li>
                    <p>
                        Wystawiona w dniu: &nbsp;{invoiceData.invDate},
                        Częstochowa
                    </p>
                </li>
                <li>
                    <p>Data zakończenia usługi: &nbsp;{invoiceData.endDate}</p>
                </li>
            </ul>
        </section>
    );
};

export default InvoiceDetails;
