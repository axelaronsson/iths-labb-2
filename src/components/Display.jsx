import React from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
  color: black;
`;

function Display({ exchangeVars, data }) {
  return (
    <StyledH3>
      1 {exchangeVars.from} ={" "}
      {data ? data[exchangeVars.to.toLowerCase()].toFixed(2) : ""}{" "}
      {exchangeVars.to}
    </StyledH3>
  );
}

export default Display;
