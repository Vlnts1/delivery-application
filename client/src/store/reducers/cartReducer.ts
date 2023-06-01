import { Product, Shop } from '../../types/Types';
import {
  ADD_TO_CART,
  CART_STORAGE_KEY,
  CartAction,
  DECREMENT_PRODUCT_COUNT,
  FETCH_PRODUCTS,
  INCREMENT_PRODUCT_COUNT,
  REMOVE_PRODUCT,
  SET_SELECTED_SHOP,
  UPDATE_SUMMARY_ITEMS,
} from '../types';

type CartState = {
  products: Product[];
  shops: Shop[];
  selectedShopId: string;
  summaryItems: Product[];
};

const saveCartToLocalStorage = (cart: CartState) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

const initialState: CartState = {
  products: [],
  shops: [],
  selectedShopId: '',
  summaryItems: [],
};

const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      const updatedShops = [...state.shops, ...action.payload];
      const newState = {
        ...state,
        shops: updatedShops,
      };
      saveCartToLocalStorage(newState);
      return newState;
    }
    case SET_SELECTED_SHOP:
      return {
        ...state,
        selectedShopId: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        summaryItems: state.summaryItems.filter((product) => product.id !== action.id),
      };
    case UPDATE_SUMMARY_ITEMS:
      return {
        ...state,
        summaryItems: action.payload,
      };
    case INCREMENT_PRODUCT_COUNT: {
      const updatedProducts = state.summaryItems.map((product) => {
        if (product.id === action.id) {
          const newQuantity = Math.min(product.quantity + 1 /* maxQuantity */);
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
      return {
        ...state,
        summaryItems: updatedProducts,
      };
    }

    case DECREMENT_PRODUCT_COUNT: {
      const updatedProducts = state.summaryItems.map((product) => {
        if (product.id === action.id) {
          const newQuantity = Math.max(product.quantity - 1, 1);
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
      return {
        ...state,
        summaryItems: updatedProducts,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
