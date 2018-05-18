import React from "react";
import styled from "styled-components";

const CurrencyButtonText = styled.div`
  position: relative;
  border: 1px solid #d2d5d6;
  background: #ffffff;
  color: #2196f3;
  text-align: center;
  padding: 12px 8px;
  cursor: pointer;
  transition: background 150ms ease-in-out;
`;

const CurrencyButtonInput = styled.input.attrs({
  type: "radio"
})`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;

  &:checked + ${CurrencyButtonText}, &:checked:active + ${CurrencyButtonText} {
    border: 1px solid #2196f3;
    background: #2196f3;
    color: #fff;
  }

  &:active + ${CurrencyButtonText} {
    background: #f2fcff;
    border: 1px solid #63b5f5;
    color: #2196f3;
  }

  &:checked:active + ${CurrencyButtonText} {

  }
`;

const CurrencyButtonContainer = styled.label`
  flex: 1;

  &:first-child ${CurrencyButtonText} {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child ${CurrencyButtonText} {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default ({ name, children, checked, onChange, value }) => (
  <CurrencyButtonContainer>
    <CurrencyButtonInput name={name} checked={checked} onChange={onChange} value={value} />
    <CurrencyButtonText>{children}</CurrencyButtonText>
  </CurrencyButtonContainer>
);
