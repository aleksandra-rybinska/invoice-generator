import { useInvoice } from '../AppContext';

const InvoiceForm = () => {
    const { invoiceData, updateInvoiceData } = useInvoice();

    return (
        <form className='form'>
            <div className='form-row'>
                <label>Numer faktury:</label>
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
                <label>Data wystawienia:</label>
                <input
                    type='date'
                    id='text'
                    name='invDate'
                    value={invoiceData.invDate}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Data zakończenia usługi:</label>
                <input
                    type='date'
                    id='text'
                    name='endDate'
                    value={invoiceData.endDate}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Nazwa klienta:</label>
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
                <label>Adres klienta - ulica i nr:</label>
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
                <label>Kod pocztowy i miejscowość:</label>
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
                <label>NIP:</label>
                <input
                    type='text'
                    id='text'
                    name='clientNip'
                    value={invoiceData.clientNip}
                    placeholder='NIP klienta'
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Uwagi:</label>
                <textarea
                    id='text'
                    name='notes'
                    placeholder='uwagi'
                    rows='7'
                    value={invoiceData.notes}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Słownie do zapłaty:</label>
                <input
                    id='text'
                    name='inWords'
                    placeholder='słownie'
                    value={invoiceData.inWords}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Sposób zapłaty:</label>
                <input
                    id='text'
                    name='payed'
                    placeholder='sposób zapłaty'
                    value={invoiceData.payed}
                    onChange={updateInvoiceData}
                />
            </div>
            <div className='form-row'>
                <label>Data zapłaty:</label>
                <input
                    type='date'
                    id='text'
                    name='payedDate'
                    value={invoiceData.payedDate}
                    onChange={updateInvoiceData}
                />
            </div>
        </form>
    );
};

export default InvoiceForm;
