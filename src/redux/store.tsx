import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loaderSlice";
import categories from "./categoriesSlice";
import cartReducer from './CartSlice';

export const store = configureStore({
  reducer: {
    mainLoader: loaderSlice,
    categories,
    cart: cartReducer,
  },
});
