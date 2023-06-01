import { Dispatch } from 'redux';
import { saveOrder } from '../../api/orders';
import { SAVE_ORDER_REQUEST, SAVE_ORDER_SUCCESS, SAVE_ORDER_FAILURE } from './orderActionTypes';
import { OrderData } from '../../types/Types';

export const saveOrderRequest = () => ({
  type: SAVE_ORDER_REQUEST,
});

export const saveOrderSuccess = () => ({
  type: SAVE_ORDER_SUCCESS,
});

export const saveOrderFailure = (error: string) => ({
  type: SAVE_ORDER_FAILURE,
  payload: error,
});

export const submitOrder = (orderData: OrderData) => {
  return async (dispatch: Dispatch) => {
    dispatch(saveOrderRequest());

    try {
      await saveOrder(orderData);
      dispatch(saveOrderSuccess());
    } catch (error: any) {
      dispatch(saveOrderFailure(error.message));
    }
  };
};
