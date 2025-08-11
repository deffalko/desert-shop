import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {}, // структура: { [id]: { ...товар, quantity } }
};

const basketSlice = createSlice({
  name: "@@basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = action.payload;
      if (state.items[item.id]) {
        state.items[item.id].quantity += 1;
      } else {
        state.items[item.id] = { ...item, quantity: 1 };
      }
    },
    incrementItem: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        if (state.items[id].quantity > 1) {
          state.items[id].quantity -= 1;
        } else {
          delete state.items[id]; // удаляем, если кол-во 0
        }
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const { addToBasket, incrementItem, decrementItem, removeItem } =
  basketSlice.actions;

export const selectBasketItems = (state) => Object.values(state.basket.items);
export const selectItemQuantity = (state, id) =>
  state.basket.items[id]?.quantity || 0;

// export default basketSlice.reducer;

export const basketReducer = basketSlice.reducer;
