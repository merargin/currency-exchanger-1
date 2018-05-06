import { REQUEST_RATES, RECEIVE_RATES } from '../constants/Rates';

const rate = (state = { rate: 1 }, action) => {
  switch (action.type) {
    
    case REQUEST_RATES:
      return { ...state, isFetching: true };
    
    case RECEIVE_RATES:
      const { rates, toCurrency, baseCurrency } = action;
      return {
        ...state,
        isFetching: false,
        rates,
        rate: toCurrency === baseCurrency ? 1 : rates[action.toCurrency]
      };
    
    default:
      return state;
  }
};

export default rate;
