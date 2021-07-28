import { createStore, combineReducers } from "redux";
import { productsReducer } from "./modules/products/reducer";
import { cartReducer } from "./modules/cart/reducer";
const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
export const store = createStore(reducers);