import { useState, useEffect } from "react";
import CurrencyPicker from "./CurrencyPicker";

function Form({handleSelect, exchangeVars, data}) {
const [inputVal, setInputVal] = useState('')
const [toVal, setToVal] = useState(0)

useEffect(() => {
  if (data) {
    setToVal(inputVal * data[exchangeVars.to.toLowerCase()])
  }

}, [inputVal, exchangeVars])

    return (
      <>
        <CurrencyPicker name={'from'} handleSelect={handleSelect} selectedCurrency={exchangeVars.from} />
        <input value={inputVal} onChange={(e) => {setInputVal(e.target.value)}} name="from" type="text" />
        <CurrencyPicker name={'to'} handleSelect={handleSelect} selectedCurrency={exchangeVars.to} />
        <input readOnly value={toVal.toFixed(2)} name="to" type="text" />
      </>
    );
  }
  export default Form