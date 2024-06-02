import styled from "styled-components";
import { ThemeContext } from "../App";
import { useContext } from "react";

const StyledSelect = styled.select`
  background-color: ${(props) => (props.$active ? "black" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: 1px solid;
`;

function CurrencyPicker({ selectedCurrency, handleSelect, name }) {
  const currencies = ["SEK", "EUR", "USD"];
  const theme = useContext(ThemeContext);

  return (
    <>
      <StyledSelect
        $active={theme}
        value={selectedCurrency}
        onChange={handleSelect}
        name={name}
        id=""
      >
        {currencies.map((item, i) => (
          <option key={i}>{item}</option>
        ))}
      </StyledSelect>
    </>
  );
}
export default CurrencyPicker;
