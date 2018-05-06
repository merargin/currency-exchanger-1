import {
  DEFAULT_BASE_CURRENCY,
  DEFAULT_TO_CURRENCY,
  SELECT_BASE_CURRENCY,
  SELECT_TO_CURRENCY,
} from '../constants/Currencies';

const initialState = {
  baseCurrency: DEFAULT_BASE_CURRENCY,
  toCurrency: DEFAULT_TO_CURRENCY,
};

const selectCurrency = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BASE_CURRENCY:
      return { ...state, baseCurrency: action.baseCurrency };
    case SELECT_TO_CURRENCY:
      return { ...state, toCurrency: action.toCurrency };
    default:
      return state;
  }
};

export default selectCurrency;
