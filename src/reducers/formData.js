import { INPUT_FROM, INPUT_TO, RECALCULATE_FROM, RECALCULATE_TO, RESET_INPUTS } from '../constants/FormData';

const formInputData = (state = { to: '', from: '' }, action) => {
  switch (action.type) {
    case INPUT_FROM:
      return { ...state, from: action.from };

    case INPUT_TO:
      return { ...state, to: action.to };

    case RECALCULATE_FROM:
      return { ...state, from: `${(action.to / action.rate).toFixed(4)}` };

    case RECALCULATE_TO:
      return { ...state, to: `${(action.from * action.rate).toFixed(4)}` };

    case RESET_INPUTS:
      return { ...state, to: '0', from: '0' };

    default:
      return state;
  }
};

export default formInputData;
