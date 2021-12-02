import { useInvoice } from '../AppContext';

const Notes = () => {
    const { positionsList } = useInvoice();
    return (
        <div className='notes'>
            <section className='notes-container'>
                <p>Uwagi:</p>
                <p>{positionsList.notes}</p>
            </section>
        </div>
    );
};

export default Notes;
