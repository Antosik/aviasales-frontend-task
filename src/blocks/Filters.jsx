import React from "react";
import styled from "styled-components";

import FilterCheckbox from "../components/FilterCheckbox";

const FilterContainer = styled.div`
  color: #4a494a;
  text-transform: uppercase;
  padding: 8px;
  font-size: 12px;
  margin-top: 16px;
`;

const FiltersList = styled.div`
  text-transform: none;
  margin-top: 8px;
`;

const FilterOnlyThis = styled.button.attrs({
  type: "button"
})`
  display: none;
  text-transform: uppercase;
  font-size: 11px;
  color: #2196F3;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 2px;
`;

const FilterItem = styled.div`
  display: block;
  margin-bottom: 4px;
  transition: 0.2s background;
  padding: 8px;
  display: flex;

  &:hover {
    background: #f1fcff;
  }

  &:hover ${FilterOnlyThis} {
    display: block;
  }
`;

export default class Filters extends React.Component {
  onChange(checked, value, all = false) {
    if (this.props.onChange)
      this.props.onChange(checked, value, all);
  }

  render() {
    return (
      <FilterContainer>
        Количество пересадок
        <FiltersList>
          {this.props.filters.map(el => (
            <FilterItem>
              <FilterCheckbox
                name="stops"
                key={`stops${el}`}
                value={el}
                checked={this.props.selected.indexOf(el) !== -1}
                onChange={e => this.onChange(e.target.checked, e.target.value)}
              >
                {formatStops(el)}
              </FilterCheckbox>
              <FilterOnlyThis
                onClick={e => this.onChange(true, el, true)}>Только</FilterOnlyThis>
            </FilterItem>
          ))}
        </FiltersList>
      </FilterContainer>
    );
  }
}

function formatStops(count) {
  if (count === 0) return "Без пересадок";
  else if (count === 1) return "1 пересадка";
  else if (count > 1 && count < 5) return `${count} пересадки`;
  else return `${count} пересадок`;
}
