import React, { useEffect, useState } from "react";
import MyButton from "../UI/my-button/MyButton";
import "./ticket.scss";
import { useSearchParams } from "react-router-dom";
import getStopsWord from "../../helpers/getStopsWord";
import { TicketProps } from "./TicketPropsTypes";

const Ticket: React.FC<TicketProps> = ({
  origin,
  originName,
  destination,
  destinationName,
  departureDate,
  departureTime,
  arrivalDate,
  arrivalTime,
  carrier,
  stops,
  price,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currency = searchParams.get("currency");
  const [newPrice, setNewPrice] = useState(price);
  const [sign, setSign] = useState("");

  useEffect(() => {
    switch (currency) {
      case "RUB":
        setNewPrice(price);
        setSign("₽");
        break;
      case "USD":
        setNewPrice(Math.ceil(price / 93));
        setSign("$");
        break;
      case "EUR":
        setNewPrice(Math.ceil(price / 101));
        setSign("€");
    }
  }, [searchParams]);
  return (
    <div className="ticket">
      <div className="left-side">
        <h1>{carrier}</h1>
        <MyButton sign={sign} price={newPrice} />
      </div>
      <div className="right-side">
        <div className="departure-info">
          <div className="departure-info__time">{departureTime}</div>
          <div className="departure-info__location">{`${originName} ${origin}`}</div>
          <div className="departure-info__date">{departureDate}</div>
        </div>
        <div className="stops">{`${stops} ${getStopsWord(stops)}`}</div>
        <div className="arrival-info">
          <div className="arrival-info__time">{arrivalTime}</div>
          <div className="arrival-info__location">{`${destinationName} ${destination}`}</div>
          <div className="arrival-info__date">{arrivalDate}</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
