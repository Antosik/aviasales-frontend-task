import React from "react";
import styled from "styled-components";
import CurrencyButton from "./CurrencyButton"; 

const CurrencyContainer = styled.div`
  color: #4a494a;
  text-transform: uppercase;
  padding: 8px;
  font-size: 12px;
`;

const CurrencyButtons = styled.div`
  border-radius: 8px;
  margin-top: 16px;
  display: flex;
  width: 100%;
`;

export default class Currency extends React.Component {
  onChange(e) {
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render() {
    return (
      <CurrencyContainer>
        Валюта
        <CurrencyButtons>
          {this.props.currencies.map(el => (
            <CurrencyButton
              name="currency"
              key={el.name}
              value={el.name}
              checked={this.props.selected === el.name}
              onChange={this.onChange.bind(this)}
            >
              {el.name}
            </CurrencyButton>
          ))}
        </CurrencyButtons>
      </CurrencyContainer>
    );
  }
}
