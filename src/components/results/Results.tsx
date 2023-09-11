import React from "react";
import Ticket from "../ticket/Ticket";
import jsonData from "../../tickets.json";
import { TicketData } from "./TicketTypes";

const Results = () => {
  const tickets: TicketData[] = jsonData.tickets;
  return (
    <div>
      {tickets.map((ticket: TicketData) => (
        <Ticket
          origin={ticket.origin}
          originName={ticket.origin_name}
          destination={ticket.destination}
          destinationName={ticket.destination_name}
          departureDate={ticket.departure_date}
          departureTime={ticket.departure_time}
          arrivalDate={ticket.arrival_date}
          arrivalTime={ticket.arrival_time}
          carrier={ticket.carrier}
          stops={ticket.stops}
          price={ticket.price}
        />
      ))}
    </div>
  );
};

export default Results;
