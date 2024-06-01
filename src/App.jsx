import { useEffect, useReducer } from 'react';
import Form from './components/Form';
import './App.css'
import styled from 'styled-components';

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case 'set_from': {
      return {
        ...state,
        currencies: {
          from: action.payload,
          to: state.currencies.to
        }
      };
    }
    case 'set_to': {
      return {
        ...state,
        currencies: {
          from: state.currencies.from,
          to: action.payload
        }
      };
    }
    case 'set_data': {
      return {
        ...state,
        data: action.payload
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = {data: null, currencies: {from: 'EUR', to: 'SEK'}};

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: #BF4F74;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelect = (e) => {
    dispatch({
      type: 'set_' + e.target.name,
      payload: e.target.value
    });
  }

  useEffect(() => {
    fetch('http://localhost:3000/' + state.currencies.from.toLowerCase())
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => {
      // console.log(response);
      dispatch({
        type: 'set_data',
        payload: response
      });
    });

  }, [state.currencies.from])


  return (
    <>
      <Title>Valutaomvandlare</Title>
      <Form data={state.data} exchangeVars={state.currencies} handleSelect={handleSelect} />
    </>
  );
}

export default App
