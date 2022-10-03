import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "./card";

interface FavoriteState {
  items: ICard[];
}

const initialState: FavoriteState = {
  items: [],
};

const favorite = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<ICard>) {
      const res = state.items.find((item) => item.id === action.payload.id);
      if (!res) {
        state.items.push(action.payload);
      }
    },
    deleteFromFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const {addToFavorite, deleteFromFavorite} = favorite.actions;

export default favorite.reducer;
