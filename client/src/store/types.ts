import { Product, Shop } from '../types/Types';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SET_SELECTED_SHOP = 'SET_SELECTED_SHOP';
export const UPDATE_SUMMARY_ITEMS = 'UPDATE_SUMMARY_ITEMS';
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';
export const INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT';
export const DECREMENT_PRODUCT_COUNT = 'DECREMENT_PRODUCT_COUNT';
export const SUBMIT_ORDER = 'SUBMIT_ORDER';
export const CART_STORAGE_KEY = 'cart';

export type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: Product;
};

export type SetSelectedShopAction = {
  type: typeof SET_SELECTED_SHOP;
  payload: string;
};
export type FetchProductsAction = {
  type: typeof FETCH_PRODUCTS;
  payload: Shop[];
};

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT;
  id: string;
};
export type UpdateSummaryItemsAction = {
  type: typeof UPDATE_SUMMARY_ITEMS;
  payload: Product[];
};

export type UpdateCartItemAction = {
  type: typeof UPDATE_CART_ITEM;
  payload: Product[];
};

export type IncrementProductCountAction = {
  type: typeof INCREMENT_PRODUCT_COUNT;
  id: string;
};

export type DecrementProductCountAction = {
  type: typeof DECREMENT_PRODUCT_COUNT;
  id: string;
};

export type SubmitOrderAction = {
  type: typeof DECREMENT_PRODUCT_COUNT;
  product: string;
};

export type CartAction =
  | UpdateSummaryItemsAction
  | SetSelectedShopAction
  | AddToCartAction
  | RemoveProductAction
  | FetchProductsAction
  | UpdateCartItemAction
  | IncrementProductCountAction
  | DecrementProductCountAction;
