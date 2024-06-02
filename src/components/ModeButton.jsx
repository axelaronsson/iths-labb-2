import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.$active ? "black" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: 1px solid;
`;

function ModeButton({ isDarkMode, handleMode }) {
  return (
    <StyledButton $active={isDarkMode} onClick={handleMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </StyledButton>
  );
}

export default ModeButton;
