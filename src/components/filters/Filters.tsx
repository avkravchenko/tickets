import React from "react";
import "./filters.scss";
import MyRadio from "../UI/my-radio/MyRadio";
import MyCheck from "../UI/my-check/MyCheck";

const Filters = () => {
  return (
    <div className="filters">
      <h3>Валюта</h3>
      <MyRadio />
      <h3>Количество пересадок</h3>
      <MyCheck />
    </div>
  );
};

export default Filters;
