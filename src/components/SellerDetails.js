import { useInvoice } from "../AppContext";

const SellerDetails = () => {
  const { seller } = useInvoice();
  return (
    <div className="details-container">
      <h2 className="details-title">Sprzedawca</h2>
      <p>
        {seller === "roman"
          ? `"RJR" ROMAN RYBIŃSKI - usługi, produkcja i montaże`
          : "RJR JOLANTA RYBIŃSKA"}
      </p>
      <p>ul. Michała Faradaya 54</p>
      <p>42-202 Częstochowa</p>
      <p>NIP: {seller === "roman" ? "6271485538" : "6271485567"}</p>
      {seller === "roman" && <p>Nr konta: 53 1140 2004 0000 3202 8126 1869</p>}
    </div>
  );
};
export default SellerDetails;
