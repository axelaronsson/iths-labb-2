import { useEffect } from 'react';
import Form from './components/Form';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

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
      <Form />
    </>
  );
}

export default App
