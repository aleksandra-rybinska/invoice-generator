import { useInvoice } from '../AppContext';

const PositionsTable = () => {
    const { positionsList } = useInvoice();

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

            {positionsList.map((item, index) => {
                return (
                    <div className='grid-row'>
                        <p>{index + 1}</p>
                        <p>{item.description}</p>
                        <p>{item.jm}</p>
                        <p>{item.quantity}</p>
                        <p>{item.price}</p>
                        <p>{item.amount}</p>
                    </div>
                );
            })}
        </section>
    );
};

export default PositionsTable;
