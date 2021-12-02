import { useInvoice } from '../AppContext';

const ClientDetails = () => {
    const { invoiceData } = useInvoice();

    return (
        <div className='details-clients'>
            <h2>Nabywca</h2>
            <p>{invoiceData.clientName}</p>
            <p>{invoiceData.clientAddress1}</p>
            <p>{invoiceData.clientAddress2}</p>
        </div>
    );
};
export default ClientDetails;
