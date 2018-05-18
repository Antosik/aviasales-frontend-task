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

const FilterItem = styled.div`
  display: block;
  margin-bottom: 4px;
  transition: 0.2s background;
  padding: 8px;

  &:hover {
    background: #f1fcff;
  }
`;

export default class Filters extends React.Component {
  onChange(e) {
    if (this.props.onChange) this.props.onChange(e.target.checked, e.target.value);
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
                key={el}
                value={el}
                checked={this.props.selected.indexOf(el) !== -1}
                onChange={this.onChange.bind(this)}
              >
                {formatStops(el)}
              </FilterCheckbox>
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
