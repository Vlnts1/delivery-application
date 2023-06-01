import { Product, Shop } from '../../types/Types';
import {
  ADD_TO_CART,
  CartAction,
  DECREMENT_PRODUCT_COUNT,
  FETCH_PRODUCTS,
  INCREMENT_PRODUCT_COUNT,
  REMOVE_PRODUCT,
  SET_SELECTED_SHOP,
  UPDATE_SUMMARY_ITEMS,
} from '../types';

export const addToCart = (product: Product): CartAction => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeProduct = (id: string): CartAction => ({
  type: REMOVE_PRODUCT,
  id,
});
export const fetchProducts = (products: Shop[]): CartAction => ({
  type: FETCH_PRODUCTS,
  payload: products,
});

export const setSelectedShop = (shopId: string): CartAction => ({
  type: SET_SELECTED_SHOP,
  payload: shopId,
});

export const updateSummaryItems = (products: Product[]): CartAction => ({
  type: UPDATE_SUMMARY_ITEMS,
  payload: products,
});

export const IncrementProductCount = (id: string): CartAction => ({
  type: INCREMENT_PRODUCT_COUNT,
  id,
});

export const DecrementProductCount = (id: string): CartAction => ({
  type: DECREMENT_PRODUCT_COUNT,
  id,
});
