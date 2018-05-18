import React from "react";
import styled from "styled-components";

import Loading from "../components/Loading";
import Ticket from "../components/Ticket";

const TicketsWrapper = styled.div`
  position: relative;
`;

export default class TicketsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.tickets = [];
    this.state = { loaded: false };
  }

  componentDidMount() {
    this.loadTickets();
  }

  loadTickets() {
    fetch(TicketsContainer.ticketsSource)
      .then(response => response.json())
      .then(response => {
        this.tickets = response.tickets;
        this.setState({ loaded: true });
      });
  }

  render() {
    return (
      <TicketsWrapper>
        {!this.state.loaded ? (
          <Loading />
        ) : (
          this.tickets.map(ticket => (
            <Ticket
              key={`${ticket.carrier}-${ticket.origin}-${ticket.destination}-${
                ticket.departure_date
              }-${ticket.departure_time}`}
              {...ticket}
              price={Math.ceil(ticket.price / this.props.currency.ratio)}
              currencySign={this.props.currency.sign}
            />
          ))
        )}
      </TicketsWrapper>
    );
  }
}
TicketsContainer.ticketsSource =
  "https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json";
