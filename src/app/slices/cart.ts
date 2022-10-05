import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItems } from "../../utils/getItemsFromLS";
import setTotalPrice from "../../utils/setTotalPrice";
import { ICard } from "./card";

interface CartState {
  items: ICard[];
  isOrderComplete: boolean,
  price: number
}

const initialState: CartState = {
  items: getItems('cart'),
  isOrderComplete: false,
  price: setTotalPrice(getItems('cart')) || 0
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
      state.price = setTotalPrice(state.items)
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.price = setTotalPrice(state.items);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    setOrder(state, action: PayloadAction<boolean>) {
      state.isOrderComplete = action.payload
    },
    resetItems(state) {
      state.items = [];
      state.price = 0;
      localStorage.setItem("cart", JSON.stringify(state.items));
    }
  }
});

export const { addToCart, deleteFromCart, setOrder, resetItems } = cart.actions;

export default cart.reducer;
