import { CURRENCIES } from '../constants/Currencies';
import { RECALCULATE_TO } from '../constants/FormData';
import { RECEIVE_RATES, REQUEST_RATES } from '../constants/Rates';
import { API_POLLING_TIMEOUT, API_BASE_URL } from '../constants/Api';

let timeOutId = null;
let previousBaseCurrency = null;

const request = (baseCurrency, dispatch, getState) => {
  const currencies = CURRENCIES;
  const toCurrenciesStr = currencies.filter(item => item !== baseCurrency).join(',');

  return fetch(`${API_BASE_URL}?base=${baseCurrency}&symbols=${toCurrenciesStr}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return false;
    })
    .then((rates) => {
      let state = getState();

      dispatch({
        type: RECEIVE_RATES,
        rates: rates.rates,
        baseCurrency,
        toCurrency: state.currencies.toCurrency,
      });

      state = getState();

      dispatch({
        type: RECALCULATE_TO,
        from: state.formData.from,
        rate: state.rate.rate,
      });
    });
};

const poll = (baseCurrency, dispatch, getState) => {
  if (timeOutId && previousBaseCurrency !== baseCurrency) {
    clearTimeout(timeOutId);

    previousBaseCurrency = baseCurrency;
  }

  request(baseCurrency, dispatch, getState).then(() => {
    timeOutId = setTimeout(() => {
      poll(baseCurrency, dispatch, getState);
    }, API_POLLING_TIMEOUT);
  });
};

export default function getRate() {
  return (dispatch, getState) => {
    const state = getState();
    const { baseCurrency } = state.currencies;

    dispatch({ type: REQUEST_RATES });

    poll(baseCurrency, dispatch, getState);
  };
}

