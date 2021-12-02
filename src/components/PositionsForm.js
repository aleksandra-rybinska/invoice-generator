const PositionsForm = ({ addField }) => {
    return (
        <form className='form' onSubmit={addField}>
            <div className='form-row'>
                <label>Nazwa towaru / usługi</label>
                <input
                    type='text'
                    id='description'
                    name='description'
                    placeholder='nazwa usługi'
                />
            </div>
            <div className='form-row'>
                <label>Jm</label>
                <input type='text' id='jm' name='jm' placeholder='np. szt' />
            </div>
            <div className='form-row'>
                <label>Ilość</label>
                <input
                    type='number'
                    id='quantity'
                    name='quantity'
                    placeholder='ilość'
                />
            </div>
            <div className='form-row'>
                <label>Cena jednostkowa</label>
                <input
                    type='number'
                    id='price'
                    name='price'
                    placeholder='cena jednostkowa'
                />
            </div>
            <button type='submit'>dodaj pozycję</button>
        </form>
    );
};

export default PositionsForm;
