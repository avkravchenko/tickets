import React, { useEffect, useState } from "react";
import Ticket from "../ticket/Ticket";
import jsonData from "../../tickets.json";
import { TicketData } from "./TicketTypes";
import { useSearchParams } from "react-router-dom";

const Results = () => {
  const tickets: TicketData[] = jsonData.tickets.sort(
    (a, b) => a.price - b.price
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const [stops, setStops] = useState<string[]>([]);

  useEffect(() => {
    setStops([...searchParams.keys()]);
  }, [searchParams]);

  const filteredTickets =
    stops.length > 1
      ? tickets.filter((ticket) => stops.includes(ticket.stops.toString()))
      : tickets;

  return (
    <div>
      {filteredTickets.map((ticket: TicketData) => (
        <Ticket
          key={crypto.randomUUID()}
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
