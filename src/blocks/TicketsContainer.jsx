import React from "react";
import styled from "styled-components";

import Loading from "../components/Loading";
import Ticket from "../components/Ticket";

const TicketsWrapper = styled.div`
  position: relative;
`;

export default function TicketsContainer({
  currency,
  loaded = false,
  tickets = []
}) {
  return (
    <TicketsWrapper>
      {!loaded ? (
        <Loading />
      ) : (
        tickets.map(ticket => (
          <Ticket
            key={`${ticket.carrier}-${ticket.origin}-${ticket.destination}-${
              ticket.departure_date
            }-${ticket.departure_time}`}
            {...ticket}
            price={Math.ceil(ticket.price / currency.ratio)}
            currencySign={currency.sign}
          />
        ))
      )}
    </TicketsWrapper>
  );
}
