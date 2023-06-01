import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import thunkMiddleware from 'redux-thunk';

import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState> = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
