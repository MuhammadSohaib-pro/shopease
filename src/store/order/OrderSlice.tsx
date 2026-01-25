import { createSlice } from "@reduxjs/toolkit";
import type { CartItem } from "../cart/CartSlice";

const ORDER_KEY: string = "shopease_order";

interface Order {
  id: string;
  items: CartItem[];
  date: string;
  total: number;
  status: "Processing" | "In Transit" | "Delivered";
  shippingInfo: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    zip: string;
  };
}

interface OrderState {
  orders: Order[];
}

const initialState: OrderState = {
  orders: JSON.parse(localStorage.getItem(ORDER_KEY) ?? "[]"),
};

const orderSlice = createSlice({
  name: "order-slice",
  initialState: initialState,
  reducers: {
    addOrder: (state, actions) => {
      state.orders.push(actions.payload);
      localStorage.setItem(ORDER_KEY, JSON.stringify(state.orders));
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
