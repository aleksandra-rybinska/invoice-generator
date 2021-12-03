import { useInvoice } from '../AppContext';

const PaymentDetails = () => {
    const { invoiceData } = useInvoice();
    return (
        <div className='payments-container'>
            <p>słownie:&nbsp;{invoiceData.inWords}</p>
            <p>sposób zapłaty:&nbsp;{invoiceData.payed} </p>
            <p>data zapłaty:&nbsp;{invoiceData.payedDate}</p>
        </div>
    );
};

export default PaymentDetails;
