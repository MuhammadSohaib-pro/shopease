import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/store/products/ProductSlice";
import wishlistReducer from "@/store/wishlist/WishlistSlice";
import cartReducer from "@/store/cart/CartSlice";
import orderReducer from "@/store/order/OrderSlice";

const store = configureStore({
  reducer: {
    // Add your reducers here
    product: productReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
