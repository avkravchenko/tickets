import React from "react";
import "./my-check.scss";

type Props = {};

const MyCheck = (props: Props) => {
  return (
    <form className="check-form">
      <div className="check-form__row">
        <input type="checkbox" name="check1" id="check1" />
        <label htmlFor="check1">Все</label>
      </div>
      <div className="check-form__row">
        <input type="checkbox" name="check2" id="check2" />
        <label htmlFor="check2">Без пересадок</label>
      </div>
      <div className="check-form__row">
        <input type="checkbox" name="check3" id="check3" />
        <label htmlFor="check3">1 пересадка</label>
      </div>
      <div className="check-form__row">
        <input type="checkbox" name="check4" id="check4" />
        <label htmlFor="check4">2 пересадки</label>
      </div>
      <div className="check-form__row">
        <input type="checkbox" name="check5" id="check5" />
        <label htmlFor="check5">3 пересадки</label>
      </div>
    </form>
  );
};

export default MyCheck;
