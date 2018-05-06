import { INPUT_TO, INPUT_FROM, RECALCULATE_FROM, RECALCULATE_TO } from '../constants/FormData';
import * as LINK from '../constants/ExchangeLink';

export default function onInputChange(data, direction) {
  return (dispatch, getState) => {
    const state = getState();
    const { rate } = state.rate;

    if (direction === 'to') {
      dispatch({ type: INPUT_TO, to: data });
      dispatch({ type: RECALCULATE_FROM, to: data, rate });
    } else {
      dispatch({ type: INPUT_FROM, from: data });
      dispatch({ type: RECALCULATE_TO, from: data, rate });
    }

    const { fromAccount } = state.accounts;
    const criteriaByCurrencies = state.currencies.baseCurrency === state.currencies.toCurrency;

    dispatch({
      type: LINK[
        `${+data > +fromAccount.balance || +data === 0 || criteriaByCurrencies ? 'DISABLE' : 'ENABLE'}_EXCHANGE_LINK`
      ],
    });
  };
}
