const getUrl = (currency, devMode) => {
  const liveUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  const devUrl = "http://localhost:3000/" + currency;

  return devMode ? devUrl : liveUrl;
};

export default getUrl;
