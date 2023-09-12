import React from "react";
import "./my-button.scss";

type Props = {
  price: number;
  sign: string;
};

const MyButton = (props: Props) => {
  return (
    <button className="my-button">
      Купить за <br />
      {props.price}
      {props.sign}
    </button>
  );
};

export default MyButton;
