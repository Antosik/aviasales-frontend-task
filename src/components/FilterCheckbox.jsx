import React from "react";
import styled from "styled-components";

const FilterCheckboxText = styled.div`
  position: relative;
  padding: 0 0 0 28px;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: #fff;
    border: 2px solid #cdd1da;
    transition: 0.2s border;
  }

  &:after {
    content: "✓";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    text-align: center;
    display: none;
    font-weight: bold;
    color: #2196f3;
  }
`;

const FilterCheckboxInput = styled.input.attrs({
  type: "checkbox"
})`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;

  &:checked + ${FilterCheckboxText}:before {
    border: 2px solid #2196f3;
  }

  &:checked + ${FilterCheckboxText}:after {
    display: block;
  }
`;

const FilterCheckboxContainer = styled.label`
  flex: 1;

  &:first-child ${FilterCheckboxText} {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child ${FilterCheckboxText} {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export default function FilterCheckbox({
  name,
  children,
  checked,
  onChange,
  value
}) {
  return (
    <FilterCheckboxContainer>
      <FilterCheckboxInput
        name={name}
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <FilterCheckboxText>{children}</FilterCheckboxText>
    </FilterCheckboxContainer>
  );
}
