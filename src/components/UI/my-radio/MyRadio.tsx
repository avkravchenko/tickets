import React from "react";
import "./my-radio.scss";

type Props = {};

const MyRadio = (props: Props) => {
  return (
    <form className="radio-group">
      <input
        className="input"
        type="radio"
        name="currency"
        id="first"
        value={1}
      />
      <label htmlFor="first" className="radio-label">
        RUB
      </label>
      <input
        className="input"
        type="radio"
        name="currency"
        id="second"
        value={2}
      />
      <label htmlFor="second" className="radio-label">
        USD
      </label>
      <input
        className="input"
        type="radio"
        name="currency"
        id="third"
        value={3}
      />
      <label htmlFor="third" className="radio-label">
        EUR
      </label>
    </form>
  );
};

export default MyRadio;
