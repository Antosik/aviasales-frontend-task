import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo";

import Header from "./blocks/Header";
import Aside from "./blocks/Aside";
import Main from "./blocks/Main";
import Currency from "./blocks/Currency";
import Filters from "./blocks/Filters"; 
import TicketsContainer from "./blocks/TicketsContainer";

const AppContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 1024px) {
      width: calc(100% - 40px);
    }
}`;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.currencies = [
      { name: "RUB", ratio: 1, sign: "₽" },
      { name: "USD", ratio: 62.32, sign: "$" },
      { name: "EUR", ratio: 73.83, sign: "€" }
    ];
    this.tickets = [];
    this.filters = [];

    this.state = {
      selectedCurrency: "RUB",
      filterBy: [],
      currenciesUpdated: false,
      ticketsLoaded: false
    };
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
    this.onFiltersChange = this.onFiltersChange.bind(this);
  }

  componentDidMount() {
    this.loadCurrencyRatio().then(updatedCurrencies => {
      this.currencies = updatedCurrencies;
      this.setState({ currenciesUpdated: true });
    });

    this.loadTickets().then(tickets => {
      this.tickets = tickets;
      this.filters = [ ...new Set(tickets.map(ticket => ticket.stops)) ].sort();
      this.setState({ ticketsLoaded: true });
    });
  }

  loadTickets() {
    return fetch(App.ticketsSource)
      .then(response => response.json())
      .then(response => response.tickets);
  }

  loadCurrencyRatio() {
    return fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then(response => response.json())
      .then(response => {
        return this.currencies.map(currency => {
          var newRatio =
            (response.Valute[currency.name] &&
              response.Valute[currency.name].Value) ||
            currency.ratio;
          return { ...currency, ratio: newRatio };
        });
      });
  }

  onCurrencyChange(currency) {
    this.setState({ selectedCurrency: currency });
  }

  onFiltersChange(checked, filter) {
    if (checked) {
      const newFilter = [ ...this.state.filterBy, Number(filter) ];
      this.setState({ filterBy: newFilter });
    } else {
      const indexOf = this.state.filterBy.indexOf(Number(filter));
      const newFilter = [ ...this.state.filterBy ];
      newFilter.splice(indexOf, 1);
      this.setState({ filterBy: newFilter });
    }
  }

  render() {
    return (
      <AppContainer>
        <Header>
          <a href="#">
            <Logo />
          </a>
        </Header>
        <Aside>
          <Currency
            currencies={this.currencies}
            selected={this.state.selectedCurrency}
            onChange={this.onCurrencyChange}
          />
          <Filters filters={this.filters} 
            selected={this.state.filterBy}
            onChange={this.onFiltersChange}/>
        </Aside>
        <Main>
          <TicketsContainer
            currency={this.currencies.find(
              el => el.name === this.state.selectedCurrency
            )}
            filter={this.state.filterBy}
            tickets={this.tickets}
            loaded={this.state.ticketsLoaded}
          />
        </Main>
      </AppContainer>
    );
  }
}

App.ticketsSource =
  "https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json";
