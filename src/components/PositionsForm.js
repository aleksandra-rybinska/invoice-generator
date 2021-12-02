import { useEffect } from 'react';
import { useInvoice } from '../AppContext';

const PositionsForm = () => {
    const {
        invoicePosition,
        positionsList,
        updateInvoicePosition,
        updatePositionsList,
        setInvoicePosition,
    } = useInvoice();
    // console.log('invoicePosition', invoicePosition);
    console.log('positionsList', positionsList);

    useEffect(() => {
        const calculateAmount = (amount) => {
            setInvoicePosition({
                ...invoicePosition,
                amount: (
                    parseFloat(invoicePosition.price) *
                    parseFloat(invoicePosition.quantity)
                ).toFixed(2),
            });
        };

        calculateAmount(invoicePosition.amount);
    }, [
        invoicePosition.amount,
        invoicePosition.price,
        invoicePosition.quantity,
    ]);

    function isNumber(n) {
        return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    }

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
                    type='text'
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
                    type='text'
                    id='price'
                    name='price'
                    placeholder='cena jednostkowa'
                    value={invoicePosition.price}
                    onChange={updateInvoicePosition}
                />
            </div>
            <div className='form-row'>
                <label>Wartość</label>
                <p>
                    {isNumber(invoicePosition.amount)
                        ? invoicePosition.amount
                        : ''}
                </p>
            </div>

            <button type='submit'>dodaj pozycję</button>
        </form>
    );
};

export default PositionsForm;
