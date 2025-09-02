import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./styles.scss";
import PositionsForm from "./components/PositionsForm";
import InvoiceForm from "./components/InvoiceForm";
import PositionsTable from "./components/PositionsTable";
import { ComponentToPrint } from "./components/ComponentToPrint";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const toggleShowInvoice = () => setShowInvoice(!showInvoice);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      {showInvoice ? (
        <div className="flex">
          <menu className="menu">
            <button onClick={toggleShowInvoice}>WRÓĆ DO EDYCJI</button>
            <button onClick={handlePrint}>DRUKUJ</button>
          </menu>
          <ComponentToPrint ref={componentRef} />
        </div>
      ) : (
        <div className="wrapper">
          <section className="form-section">
            <InvoiceForm />
            <PositionsForm />
          </section>
          <h3 className="ml">Podgląd pozycji na fakturze:</h3>
          <PositionsTable />

          <button className="ml" onClick={toggleShowInvoice}>
            PODGLĄD FAKTURY
          </button>
        </div>
      )}
    </>
  );
}

export default App;
