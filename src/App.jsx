import { useEffect, useReducer } from 'react';
import Form from './components/Form';
import './App.css'


function reducer(state, action) {
  switch (action.type) {
    case 'set_from': {
      return {
        from: action.payload,
        to: state.to
      };
    }
    case 'set_to': {
      return {
        from: state.from,
        to: action.payload
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = {from: 'EUR', to: 'SEK'};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelect = (e) => {
    dispatch({
      type: 'set_' + e.target.name,
      payload: e.target.value
    });
  }

  useEffect(() => {
    fetch('http://localhost:3000/eur')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => {
      console.log(response.usd);
    });
  }, [])

  return (
    <>
      <h1>Valutaomvandlare</h1>
      <Form exchangeVars={state} handleSelect={handleSelect} />
    </>
  );
}

export default App
