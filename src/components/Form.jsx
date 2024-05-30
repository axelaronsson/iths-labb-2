import CurrencyPicker from "./CurrencyPicker";

function Form({handleSelect, exchangeVars}) {

    return (
      <>
        <CurrencyPicker name={'from'} handleSelect={handleSelect} selectedCurrency={exchangeVars.from} />
        <input name="from" type="text" />
        <CurrencyPicker name={'to'} handleSelect={handleSelect} selectedCurrency={exchangeVars.to} />
        <input name="to" type="text" />
      </>
    );
  }
  export default Form