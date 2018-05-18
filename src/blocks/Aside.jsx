import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
  background: #fff;
  padding: 8px;
  margin: 10px;
  box-shadow: 0px 1px 4px rgba(91, 137, 163, 0.25);
  flex: 1 0 auto;
  height: 320px;

  @media (min-width: 1024px) {
    flex: 0 0 230px;
  }
`;

export default Aside;
