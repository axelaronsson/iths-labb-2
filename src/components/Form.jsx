import { useState, useEffect, useContext } from "react";
import CurrencyPicker from "./CurrencyPicker";
import styled from "styled-components";
import { ThemeContext } from "./App";

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: ${(props) => (props.$active ? "grey" : "white")};
  color: ${(props) => (props.$active ? "white" : "black")};
  border: 1px solid black;
  border-radius: 3px;
`;

function Form({ handleSelect, exchangeVars, data }) {
  const theme = useContext(ThemeContext);

  const [inputVal, setInputVal] = useState("");
  const [toVal, setToVal] = useState(0);

  useEffect(() => {
    if (data) {
      setToVal(inputVal * data[exchangeVars.to.toLowerCase()]);
    }
  }, [inputVal, exchangeVars, data]);

  return (
    <>
      <CurrencyPicker
        name={"from"}
        handleSelect={handleSelect}
        selectedCurrency={exchangeVars.from}
      />
      <StyledInput
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        name="from"
        type="text"
        $active={theme}
      ></StyledInput>
      <br />
      <CurrencyPicker
        name={"to"}
        handleSelect={handleSelect}
        selectedCurrency={exchangeVars.to}
      />
      <StyledInput
        readOnly
        type="text"
        name="to"
        value={toVal.toFixed(2)}
        $active={theme}
      ></StyledInput>
    </>
  );
}
export default Form;
