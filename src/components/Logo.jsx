import React from "react";
import styled from "styled-components";

import logo from "../images/logo.png";
import logoHD from "../images/logo@2x.png";

const LogoImg = styled.img`
  border-radius: 50%;
  box-shadow: 0px 4px 11px rgba(0, 0, 0, 0.35);
`;

export default function Logo() {
  return (
    <picture>
      <source srcSet={`${logo} 1x, ${logoHD} 2x`} type="image/png" />
      <LogoImg src="../images/logo.png" alt="Logo" />
    </picture>
  );
}
