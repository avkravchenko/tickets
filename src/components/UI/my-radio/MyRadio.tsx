import React from "react";
import "./my-radio.scss";
import { useSearchParams } from "react-router-dom";

const MyRadio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCurrency: string = searchParams.get("currency") ?? "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    setSearchParams((searchParams) => {
      searchParams.set("currency", selectedValue);
      return searchParams;
    });
  };

  return (
    <form className="radio-group">
      <input
        className="input"
        type="radio"
        name="currency"
        id="first"
        onChange={handleChange}
        value={"RUB"}
        checked={currentCurrency === "RUB"}
      />
      <label htmlFor="first" className="radio-label">
        RUB
      </label>
      <input
        className="input"
        type="radio"
        name="currency"
        onChange={handleChange}
        id="second"
        value={"USD"}
        checked={currentCurrency === "USD"}
      />
      <label htmlFor="second" className="radio-label">
        USD
      </label>
      <input
        className="input"
        type="radio"
        onChange={handleChange}
        name="currency"
        id="third"
        value={"EUR"}
        checked={currentCurrency === "EUR"}
      />
      <label htmlFor="third" className="radio-label">
        EUR
      </label>
    </form>
  );
};

export default MyRadio;
