import React from "react";
import MyButton from "../UI/my-button/MyButton";
import "./ticket.scss";

interface TicketProps {
  origin: string;
  originName: string;
  destination: string;
  destinationName: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  carrier: string;
  stops: number;
  price: number;
}

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
  return (
    <div className="ticket">
      <div className="left-side">
        <h1>{carrier}</h1>
        <MyButton price={price} />
      </div>
      <div className="right-side">
        <div className="departure-info">
          <div className="departure-info__time">{departureTime}</div>
          <div className="departure-info__location">{`${originName} ${origin}`}</div>
          <div className="departure-info__date">{departureDate}</div>
        </div>
        <div className="stops">{`${stops} ПЕРЕСАДКА`}</div>
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
