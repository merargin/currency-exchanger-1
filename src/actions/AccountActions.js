import { EXCHANGE } from '../constants/Accounts';
import { RESET_INPUTS } from '../constants/FormData';
import {
  SHOW_SUCCESS_NOTIFICATION,
  HIDE_SUCCESS_NOTIFICATION,
  NOTIFICATION_SHOW_TIME,
} from '../constants/Notification';

export default function exchange() {
  return (dispatch, getState) => {
    const state = getState();
    const { currencies, formData } = state;
    const { rate } = state.rate;

    dispatch({
      type: EXCHANGE,
      from: currencies.baseCurrency,
      to: currencies.toCurrency,
      amountFrom: formData.from,
      amountTo: formData.to,
      rate
    });

    dispatch({
      type: RESET_INPUTS
    });

    dispatch({
      type: SHOW_SUCCESS_NOTIFICATION
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_SUCCESS_NOTIFICATION
      });
    }, NOTIFICATION_SHOW_TIME);
  };
}
