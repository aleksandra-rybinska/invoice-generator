import { useInvoice } from '../AppContext';

const PositionsTable = () => {
    const { invoicePosition } = useInvoice();

    return (
        <section className='grid'>
            <div className='grid-row'>
                <p>Lp.</p>
                <p>Nazwa towaru lub usługi</p>
                <p>Jm</p>
                <p>Ilość</p>
                <p>Cena jedn.</p>
                <p>Wartość</p>
            </div>
            <div className='grid-row'>
                <p>lp</p>
                <p>{invoicePosition.description}</p>
                <p>{invoicePosition.jm}</p>
                <p>{invoicePosition.quantity}</p>
                <p>{invoicePosition.price}</p>
                <p>Wartość</p>
            </div>
        </section>
    );
};

export default PositionsTable;
