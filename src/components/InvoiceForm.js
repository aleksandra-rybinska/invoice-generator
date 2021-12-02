import { useInvoice } from '../AppContext';

const InvoiceForm = () => {
    const { invoiceData, updateInvoiceData } = useInvoice();

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
                    value={invoiceData.invDate}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Data zakończenia usługi</label>
                <input
                    type='date'
                    id='text'
                    name='endDate'
                    value={invoiceData.endDate}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Nazwa klienta</label>
                <input
                    type='text'
                    id='text'
                    name='clientName'
                    value={invoiceData.clientName}
                    placeholder='nazwa firmy'
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Adres klienta - ulica</label>
                <input
                    type='text'
                    id='text'
                    name='clientAddress1'
                    value={invoiceData.clientAddress1}
                    placeholder='ulica'
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Kod pocztowy i miejscowość</label>
                <input
                    type='text'
                    id='text'
                    name='clientAddress2'
                    value={invoiceData.clientAddress2}
                    placeholder='kod pocztowy i miejscowość'
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Uwagi</label>
                <textarea
                    id='text'
                    name='notes'
                    placeholder='uwagi'
                    value={invoiceData.notes}
                    onChange={updateInvoiceData}
                />
            </div>
        </form>
    );
};

export default InvoiceForm;
