import { combineReducers } from 'redux';
import accounts from './accounts';
import notification from './notification';
import exchangeLink from './exchangeLink';
import formData from './formData';
import currencies from './currencies';
import rate from './rate';

const reducers = combineReducers({
  accounts,
  notification,
  exchangeLink,
  formData,
  currencies,
  rate
});

export default reducers;
