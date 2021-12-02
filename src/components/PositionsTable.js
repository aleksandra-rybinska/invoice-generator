import { useInvoice } from '../AppContext';

const PositionsTable = () => {
    const { positionsList } = useInvoice();

    return (
        <section className='grid'>
            <div className='grid-row'>
                <p>
                    <b>Lp.</b>
                </p>
                <p>
                    <b>Nazwa towaru lub usługi</b>
                </p>
                <p>
                    <b>Jm</b>
                </p>
                <p>
                    <b>Ilość</b>
                </p>
                <p>
                    <b>Cena jedn. w PLN</b>
                </p>
                <p>
                    <b>Wartość w PLN</b>
                </p>
            </div>

            {positionsList.map((item, index) => {
                return (
                    <div key={item.id} className='grid-row'>
                        <p>{index + 1}</p>
                        <p>{item.description}</p>
                        <p>{item.jm}</p>
                        <p>{item.quantity}</p>
                        <p>{item.price}</p>
                        <p>{item.amount}</p>
                    </div>
                );
            })}
            <div className='total'>
                <h2>Razem do zapłaty:{}</h2>
            </div>
        </section>
    );
};

export default PositionsTable;
