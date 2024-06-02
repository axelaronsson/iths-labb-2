import { useEffect, useReducer, createContext, useState } from "react";
import Form from "./components/Form";
import ModeButton from "./components/ModeButton";
import Display from "./components/Display";
import "./App.css";
import styled from "styled-components";

function reducer(state, action) {
  switch (action.type) {
    case "set_from": {
      return {
        ...state,
        currencies: {
          from: action.payload,
          to: state.currencies.to,
        },
      };
    }
    case "set_to": {
      return {
        ...state,
        currencies: {
          from: state.currencies.from,
          to: action.payload,
        },
      };
    }
    case "set_data": {
      return {
        ...state,
        data: action.payload,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const initialState = { data: null, currencies: { from: "EUR", to: "SEK" } };

export const ThemeContext = createContext();

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isDarkMode, setMode] = useState(false);

  const handleSelect = (e) => {
    dispatch({
      type: "set_" + e.target.name,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/" + state.currencies.from.toLowerCase())
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        dispatch({
          type: "set_data",
          payload: response,
        });
      });
  }, [state.currencies.from]);

  return (
    <>
      <ModeButton
        className="mode-btn"
        isDarkMode={isDarkMode}
        handleMode={() => {
          setMode(!isDarkMode);
        }}
      />
      <div className={isDarkMode ? "app dark" : "app light"}>
        <ThemeContext.Provider value={isDarkMode}>
          <Title>Valutaomvandlare</Title>
          <Form
            data={state.data}
            exchangeVars={state.currencies}
            handleSelect={handleSelect}
          />
        </ThemeContext.Provider>
        <Display data={state.data} exchangeVars={state.currencies} />
      </div>
    </>
  );
}

export default App;
