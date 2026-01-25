import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchProducts,
  fetchProductById,
  fetchProductsByCategory,
} from "./ProductThunk";

interface ProductState {
  products: Product[];
  productLoader: boolean;
  categories: string[];
  categoriesLoader: boolean;
  detailLoader: boolean;
  selectedProduct: Product | null;
  error: string | null;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const initialState: ProductState = {
  products: [],
  productLoader: false,
  categories: [],
  categoriesLoader: false,
  detailLoader: false,
  selectedProduct: null,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categoriesLoader = true;
      })
      .addCase(fetchCategories.fulfilled, (state, actions) => {
        state.categories = actions.payload;
        state.categoriesLoader = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categoriesLoader = false;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.productLoader = true;
      })
      .addCase(fetchProducts.fulfilled, (state, actions) => {
        state.productLoader = false;
        state.products = actions.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.productLoader = false;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.detailLoader = true;
      })
      .addCase(fetchProductById.fulfilled, (state, actions) => {
        state.detailLoader = false;
        state.selectedProduct = actions.payload;
      })
      .addCase(fetchProductById.rejected, (state, actions) => {
        state.detailLoader = false;
        state.error = actions.payload as string | null;
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.productLoader = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, actions) => {
        state.productLoader = false;
        state.products = actions.payload;
      })
      .addCase(fetchProductsByCategory.rejected, (state, actions) => {
        state.productLoader = false;
        state.error = actions.payload as string | null;
      });
  },
});

// export const { addProductToWishlist } = productSlice.actions;
export default productSlice.reducer;
