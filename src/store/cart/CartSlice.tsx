import { createSlice } from "@reduxjs/toolkit";

const CART_KEY: string = "shopease_cart";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem(CART_KEY) ?? "[]"),
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: initialState,
  reducers: {
    addtoCart: (state, actions) => {
      const existingItem = state.items.find(
        (item) => item.id === actions.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const item = { ...actions.payload, quantity: 1 };
        state.items.push(item);
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },
    removeFromCart: (state, actions) => {
      state.items = state.items.filter(
        (item) => item.id !== actions.payload.id,
      );
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },
    updateQuantity: (state, actions) => {
      if (actions.payload.quantity <= 0) {
        state.items = state.items.filter(
          (item) => item.id !== actions.payload.id,
        );
      } else {
        state.items.map((item) =>
          item.id === actions.payload.id
            ? (item.quantity = actions.payload.quantity)
            : item,
        );
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const {
  addtoCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;
