import { useEffect, useReducer } from 'react';
import Form from './components/Form';
import './App.css'


function reducer(state, action) {
  switch (action.type) {
    case 'set_from': {
      return {
        ...state,
        from: action.payload,
        to: state.to
      };
    }
    case 'set_to': {
      return {
        ...state,
        from: state.from,
        to: action.payload
      };
    }
    case 'init_data': {
      return {
        ...state,
        data: action.payload
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = {from: 'EUR', to: 'SEK', data: null};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelect = (e) => {
    dispatch({
      type: 'set_' + e.target.name,
      payload: e.target.value
    });
  }

  useEffect(() => {
    fetch('http://localhost:3000/' + state.from.toLowerCase())
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => {
      dispatch({
        type: 'init_data',
        payload: response
      });
    });

  }, [state.from])

  return (
    <>
      <h1>Valutaomvandlare</h1>
      <Form data={state.data} exchangeVars={state} handleSelect={handleSelect} />
    </>
  );
}

export default App
