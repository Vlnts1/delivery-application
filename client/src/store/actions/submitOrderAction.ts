import { OrderData, Product } from '../../types/Types';

export const SUBMIT_ORDER = 'SUBMIT_ORDER';
export const SUBMIT_ORDER_SUCCESS = 'SUBMIT_ORDER_SUCCESS';
export const SUBMIT_ORDER_FAILURE = 'SUBMIT_ORDER_FAILURE';

export const submitOrder = (orderData: OrderData) => {
  return {
    type: SUBMIT_ORDER,
    payload: orderData,
  };
};

export const submitOrderSuccess = () => {
  return {
    type: SUBMIT_ORDER_SUCCESS,
  };
};

export const submitOrderFailure = (error: string) => {
  return {
    type: SUBMIT_ORDER_FAILURE,
    payload: error,
  };
};

export type AddToCartAction = {
  type: 'ADD_TO_CART';
  product: Product;
};

export type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  productId: string;
};

export type UpdateProductCountAction = {
  type: 'UPDATE_PRODUCT_COUNT';
  productId: string;
  quantity: number;
};

export type SubmitOrderAction = {
  type: 'SUBMIT_ORDER';
  orderData: OrderData;
};

export type OrderAction =
  | AddToCartAction
  | RemoveFromCartAction
  | UpdateProductCountAction
  | SubmitOrderAction;

// Define the OrderState type
export type OrderState = {
  cart: Product[];
  orderData: OrderData | null;
};

export const initialState: OrderState = {
  cart: [],
  orderData: null,
};
