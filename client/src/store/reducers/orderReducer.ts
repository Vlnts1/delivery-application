import {
    SAVE_ORDER_FAILURE,
    SAVE_ORDER_REQUEST,
    SAVE_ORDER_SUCCESS,
  } from '../actions/orderActionTypes';
  
  type OrderState = {
    loading: boolean;
    error: string;
  };
  
  const initialState: OrderState = {
    loading: false,
    error: '',
  };
  
  const orderReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SAVE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
          error: '',
        };
      case SAVE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: '',
        };
      case SAVE_ORDER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  