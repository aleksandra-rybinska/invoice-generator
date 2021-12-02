import { useInvoice } from '../AppContext';

const InvoiceForm = (
    {
        // data, updateField
    }
) => {
    const { invoiceData, updateInvoiceData } = useInvoice();
    console.log('invForm -> invoiceData', invoiceData);

    return (
        <form className='form'>
            <div className='form-row'>
                <label>Numer faktury</label>
                <input
                    type='text'
                    id='text'
                    name='invNum'
                    placeholder='nr faktury'
                    value={invoiceData.invNum}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Data wystawienia</label>
                <input
                    type='date'
                    id='text'
                    name='invDate'
                    // value={data.invDate ? data.invDate : null}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Data zakończenia usługi</label>
                <input
                    type='date'
                    id='text'
                    name='endDate'
                    // value={data.servDate ? data.servDate : null}
                    onChange={updateInvoiceData}
                />
            </div>
        </form>
    );
};

export default InvoiceForm;
