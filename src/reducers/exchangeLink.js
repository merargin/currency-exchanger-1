import { ENABLE_EXCHANGE_LINK, DISABLE_EXCHANGE_LINK } from '../constants/ExchangeLink';

const initialState = { isDisabled: true };

const exchangeLink = (state = initialState, action) => {
  switch (action.type) {
    
    case DISABLE_EXCHANGE_LINK:
      return { ...state, isDisabled: true };
    
    case ENABLE_EXCHANGE_LINK:
      return { ...state, isDisabled: false };
    
    default:
      return state;
  }
};

export default exchangeLink;
