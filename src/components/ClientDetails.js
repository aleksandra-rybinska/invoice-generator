import { useInvoice } from '../AppContext';

const ClientDetails = () => {
    const { invoiceData } = useInvoice();

    return (
        <div className='details-clients'>
            <h2>Nabywca</h2>
            <p>{invoiceData.clientName}</p>
            <p>{invoiceData.clientAddress1}</p>
            <p>{invoiceData.clientAddress2}</p>
            <p>NIP:{invoiceData.clientNip}</p>
        </div>
    );
};
export default ClientDetails;
