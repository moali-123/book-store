import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  book: "",
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.amount++;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem._id === action.payload._id
      );
      cartItem
        ? (cartItem.amount = cartItem.amount + 1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
    },
    increase: (state, action) => {
      state.amount++;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      state.cartItems[itemIndex].amount += 1;
      let total = 0;
      total = state.cartItems[itemIndex].amount * state.cartItems.price;
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      state.cartItems[itemIndex].amount > 0 &&
        state.cartItems[itemIndex].amount-- &&
        state.amount--;
    },
    remove: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          state.cartItems = state.cartItems.filter(
            (item) => item._id !== cartItem._id
          );
          state.amount = state.amount - cartItem.amount;
        }
      });
    },
    total: (state) => {
      let total = 0;
      state.cartItems.forEach((cartItem) => {
        total += cartItem.amount * cartItem.price;
      });
      state.total = total;
    },
    clear: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
  },
});

export const { add, increase, decrease, remove, total, clear } =
  CartSlice.actions;
export default CartSlice.reducer;
