import { configureStore } from "@reduxjs/toolkit";
import cartItems from "./sliecrs/cart";
import orderItems from "./sliecrs/orders";
import products from "./sliecrs/products";

export const store = configureStore({
  reducer: {
    products,
    cartItems,
    orderItems,
  },
});
