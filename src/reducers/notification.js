import { SHOW_SUCCESS_NOTIFICATION, HIDE_SUCCESS_NOTIFICATION } from '../constants/Notification';

const initialState = { isVisible: false };

const notification = (state = initialState, action) => {
  switch (action.type) {
    
    case SHOW_SUCCESS_NOTIFICATION:
      return { ...state, isVisible: true };
    
    case HIDE_SUCCESS_NOTIFICATION:
      return { ...state, isVisible: false };
    
    default:
      return state;
  }
};

export default notification;
