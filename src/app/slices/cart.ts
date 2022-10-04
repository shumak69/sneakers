import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItems } from "../../utils/getItemsFromLS";
import { ICard } from "./card";

interface CartState {
  items: ICard[];
}

const initialState: CartState = {
  items: getItems('cart')
};



const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICard>) {
      const res = state.items.find((item) => item.id === action.payload.id);
      if (!res) {
        state.items.push(action.payload);
      }
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  }
});

export const { addToCart, deleteFromCart } = cart.actions;

export default cart.reducer;
