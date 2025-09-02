import { useEffect } from "react";
import { useInvoice } from "../AppContext";
import SellerSwitch from "./SellerSwitch";

const PositionsForm = () => {
  const {
    invoicePosition,
    updateInvoicePosition,
    updatePositionsList,
    setInvoicePosition,
  } = useInvoice();

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
  }, [invoicePosition.amount, invoicePosition.price, invoicePosition.quantity]);

  function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  }

  const handleDelete = () => {
    let keysToRemove = ["invoicePosition", "positionsList"];
    keysToRemove.forEach((k) => localStorage.removeItem(k));
    window.location.reload();
  };

  return (
    <form className="form" onSubmit={updatePositionsList}>
      <div className="form-row">
        <label>Nazwa towaru / usługi:</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="nazwa usługi"
          value={invoicePosition.description}
          onChange={updateInvoicePosition}
        />
      </div>
      <div className="form-row">
        <label>Jm:</label>
        <input
          type="text"
          id="jm"
          name="jm"
          placeholder="np. szt"
          value={invoicePosition.jm}
          onChange={updateInvoicePosition}
        />
      </div>
      <div className="form-row">
        <label>Ilość *:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          placeholder="ilość"
          value={invoicePosition.quantity}
          onChange={updateInvoicePosition}
        />
      </div>
      <div className="form-row">
        <label>Cena jednostkowa *:</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="cena jednostkowa"
          value={invoicePosition.price}
          onChange={updateInvoicePosition}
        />
      </div>
      <div className="form-row">
        <label>Wartość:</label>
        <p>
          {isNumber(invoicePosition.amount) ? invoicePosition.amount : ""}
          &nbsp;PLN
        </p>
      </div>
      <div className="form-annotation">
        <h4>
          * Wpisując wartości dziesiętne należy użyć KROPKI zamiast przecinka
          <br /> (np. 1.99)
        </h4>
      </div>
      <div className="form-button-container">
        <button type="submit">DODAJ POZYCJĘ</button>
        <button type="reset" onClick={handleDelete}>
          USUŃ WSZYSTKIE POZYCJE
        </button>
      </div>
      <SellerSwitch />
    </form>
  );
};

export default PositionsForm;
