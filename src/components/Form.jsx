import CurrencyPicker from "./CurrencyPicker";

function Form() {

    return (
      <>
        <CurrencyPicker selectedCurrency={'EUR'} />
        <input name="from" type="text" />
        <CurrencyPicker selectedCurrency={'SEK'} />
        <input name="to" type="text" />
      </>
    );
  }
  export default Form