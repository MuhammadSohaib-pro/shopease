import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../products/ProductSlice";

const WISHLIST_KEY: string = "shopease_wishlist";

interface WishlistState {
  wishlist: Product[];
}

const initialState: WishlistState = {
  wishlist: JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]"),
};

const wishlistSlice = createSlice({
  name: "wishlist-slice",
  initialState: initialState,
  reducers: {
    addToWishlist: (state, actions) => {
      state.wishlist.push(actions.payload);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(state.wishlist));
    },
    removeFromWishlist: (state, actions) => {
      const updatedProduct = state.wishlist.filter(
        (product) => product.id !== actions.payload,
      );
      state.wishlist = [...updatedProduct];
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(state.wishlist));
    },
    toggleWishlist: (state, actions) => {
      const exist = state.wishlist.some(
        (product) => product.id === actions.payload.id,
      );
      if (exist) {
        const updatedProduct = state.wishlist.filter(
          (product) => product.id !== actions.payload.id,
        );
        state.wishlist = [...updatedProduct];
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(state.wishlist));
      } else {
        state.wishlist.push(actions.payload);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(state.wishlist));
      }
    },
    clearWishlist: (state) => {
      state.wishlist = [];
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(state.wishlist));
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
