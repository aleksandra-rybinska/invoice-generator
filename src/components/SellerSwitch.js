import React from "react";
import { useInvoice } from "../AppContext";

const SellerSwitch = () => {
  const { seller, setSeller } = useInvoice();
  const handleSellerChange = (name) => {
    setSeller(() => name);
  };
  return (
    <div className="sellerswitch">
      <h3>Wybierz sprzedawcę:</h3>
      <fieldset>
        <span>
          <input
            type="radio"
            name="seller"
            value="roman"
            checked={seller === "roman"}
            onChange={() => handleSellerChange("roman")}
          />
          <label htmlFor="roman">Roman</label>
        </span>
        <span>
          <input
            type="radio"
            name="seller"
            value="jolanta"
            checked={seller === "jolanta"}
            onChange={() => handleSellerChange("jolanta")}
          />
          <label htmlFor="jolanta">Jolanta</label>
        </span>
      </fieldset>
    </div>
  );
};

export default SellerSwitch;
