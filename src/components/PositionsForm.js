import { useInvoice } from '../AppContext';

const PositionsForm = () => {
    const {
        invoicePosition,
        positionsList,
        updateInvoicePosition,
        updatePositionsList,
    } = useInvoice();
    // console.log('invoicePosition', invoicePosition);
    console.log('positionsList', positionsList);
    return (
        <form className='form' onSubmit={updatePositionsList}>
            <div className='form-row'>
                <label>Nazwa towaru / usługi</label>
                <input
                    type='text'
                    id='description'
                    name='description'
                    placeholder='nazwa usługi'
                    value={invoicePosition.description}
                    onChange={updateInvoicePosition}
                />
            </div>
            <div className='form-row'>
                <label>Jm</label>
                <input
                    type='text'
                    id='jm'
                    name='jm'
                    placeholder='np. szt'
                    value={invoicePosition.jm}
                    onChange={updateInvoicePosition}
                />
            </div>
            <div className='form-row'>
                <label>Ilość</label>
                <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    placeholder='ilość'
                    value={invoicePosition.quantity}
                    onChange={updateInvoicePosition}
                />
            </div>
            <div className='form-row'>
                <label>Cena jednostkowa</label>
                <input
                    type='number'
                    id='price'
                    name='price'
                    placeholder='cena jednostkowa'
                    value={invoicePosition.price}
                    onChange={updateInvoicePosition}
                />
            </div>
            <button type='submit'>dodaj pozycję</button>
        </form>
    );
};

export default PositionsForm;
