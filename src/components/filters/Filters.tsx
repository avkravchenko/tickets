import React from "react";
import "./filters.scss";
import MyRadio from "../UI/my-radio/MyRadio.tsx";

type Props = {};

const Filters = (props: Props) => {
  return (
    <div className="filters">
      <h3>Валюта</h3>
      <MyRadio />
      <h3>Количество пересадок</h3>
    </div>
  );
};

export default Filters;
