import React from "react";
import styled from "styled-components";

import Currency from "./components/Currency";
import Filters from "./components/Filters";
import Logo from "./components/Logo";

import Header from "./blocks/Header";
import Aside from "./blocks/Aside";
import Main from "./blocks/Main";
import TicketsContainer from "./blocks/TicketsContainer";

const AppContainer = styled.div`
    width: calc(100% - 40px);
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}`;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedCurrency: "RUB" };
    this.onCurrencyChange = this.onCurrencyChange.bind(this);
    this.currencies = [
      { name: "RUB", ratio: 1, sign: "₽" },
      { name: "USD", ratio: 62.32, sign: "$" },
      { name: "EUR", ratio: 73.83, sign: "€" }
    ];
  }

  onCurrencyChange(currency) {
    this.setState({ selectedCurrency: currency });
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
          <Filters />
        </Aside>
        <Main>
          <TicketsContainer
            currency={this.currencies.find(el => el.name === this.state.selectedCurrency)}
          />
        </Main>
      </AppContainer>
    );
  }
}
