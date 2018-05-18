import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
  margin: 60px auto;
  font-size: 10px;
  text-indent: -9999em;
  border-top: 1.1em solid #fff;
  border-right: 1.1em solid #fff;
  border-bottom: 1.1em solid #fff;
  border-left: 1.1em solid #2196f3;
  transform: translateZ(0);
  animation: ${loadingAnimation} 1.1s infinite linear;

  &,
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
    position: absolute;
    left: calc(50% - 5em);
  }
`;

export default Loading;
