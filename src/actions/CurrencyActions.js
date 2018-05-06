import { SELECT_BASE_CURRENCY, SELECT_TO_CURRENCY } from '../constants/Currencies';
import { RECALCULATE_TO } from '../constants/FormData';
import { RECEIVE_RATES } from '../constants/Rates';
import * as LINK from '../constants/ExchangeLink';

export default function onCurrencyChange(data, direction) {
  return (dispatch, getState) => {
    let state = getState();
    const { accounts } = state.accounts;

    if (direction === 'from') {
      dispatch({
        type: SELECT_BASE_CURRENCY,
        baseCurrency: data,
        accounts,
      });
    } else {
      dispatch({
        type: SELECT_TO_CURRENCY,
        toCurrency: data,
        accounts,
      });

      state = getState();

      dispatch({
        type: RECEIVE_RATES,
        rates: state.rate.rates,
        baseCurrency: state.currencies.baseCurrency,
        toCurrency: state.currencies.toCurrency,
      });

      state = getState();

      dispatch({
        type: RECALCULATE_TO,
        from: state.formData.from,
        rate: state.rate.rate,
      });
    }
    state = getState();

    const criteriaByCurrencies = state.currencies.baseCurrency === state.currencies.toCurrency;
    const fromAccountBalance = state.accounts.fromAccount.balance;
    const fromData = state.formData.from || 0;
    const criteriaByInputs = +fromAccountBalance < +fromData || fromData === 0;

    dispatch({
      type: LINK[
        `${criteriaByCurrencies || criteriaByInputs ? 'DISABLE' : 'ENABLE'}_EXCHANGE_LINK`
      ],
    });
  };
}
