import React from "react";
import "./my-button.scss";

type Props = { price: number };

const MyButton = (props: Props) => {
  return (
    <button className="my-button">
      Купить за <br />
      {props.price}₽
    </button>
  );
};

export default MyButton;
