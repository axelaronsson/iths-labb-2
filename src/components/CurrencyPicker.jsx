function CurrencyPicker({selectedCurrency, handleSelect, name}) {
    const currencies = ['SEK', 'EUR', 'USD']

    return (
      <>
        <select value={selectedCurrency} onChange={handleSelect} name={name} id="">
            {
                currencies.map((item, i) => <option key={i}>{item}</option>)
            }
        </select>
      </>
    );
  }
  export default CurrencyPicker