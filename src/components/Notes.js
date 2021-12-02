import { useInvoice } from '../AppContext';

const Notes = () => {
    const { positionsList } = useInvoice();
    return (
        <section>
            <p>Uwagi:</p>
            <p>{positionsList.notes}</p>
        </section>
    );
};

export default Notes;
