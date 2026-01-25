import { axiosInstance } from "@/utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
  "fetch-product-categories",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/products/categories");
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchProducts = createAsyncThunk(
  "fetch-products",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/products");
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchProductById = createAsyncThunk(
  "fetch-product-by-id",
  async ({ id }: { id: number }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchProductsByCategory = createAsyncThunk(
  "fetch-products-by-category",
  async ({ category }: { category: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/products/category/${category}`,
      );
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
