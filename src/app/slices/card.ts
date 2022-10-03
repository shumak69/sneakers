import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface CardState {
  title: string;
  price: number;
  imageUrl: string;
}

export type ICard = CardState & {id: number}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export const fetchSneakers = createAsyncThunk<ICard[]>("sneakers/fetchSneakersStatus", async () => {
  const res = await axios.get("https://6335d63a8aa85b7c5d2408e2.mockapi.io/items");
  return res.data;
});

interface CardSliceState {
  isCartOpen: boolean;
  items: ICard[];
  status: Status;
}

const initialState: CardSliceState = {
  items: [],
  isCartOpen: false,
  status: Status.LOADING,
};

const card = createSlice({
  name: "Card",
  initialState,
  reducers: {
    openCart(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { openCart } = card.actions;

export default card.reducer;
