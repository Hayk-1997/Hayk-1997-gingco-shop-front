import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TCreateProductForm } from '../../type/product';
import { TProduct } from '../../type/web/products';

type TInitialState = {
  products: [];
  createProductSuccess: boolean;
  createProductError: boolean;
};

const initialState: TInitialState = {
  products: [],
  createProductSuccess: false,
  createProductError: false,
};

export const adminProductSlice = createSlice({
  name: 'admin/product',
  initialState,
  reducers: {
    setGetProductsRequest: (state) => {
      state.products = [];
    },
    setGetProductsSuccess: (state, action) => {
      state.products = action.payload;
    },
    setGetProductsError: (state) => {
      state.products = [];
    },
    setCreateProductRequest: (state) => {
      state.createProductSuccess = false;
      state.createProductError = false;
    },
    setCreateProductSuccess: (state) => {
      state.createProductSuccess = true;
      state.createProductError = false;
    },
    setCreateProductError: (state) => {
      state.createProductSuccess = false;
      state.createProductError = true;
    },
  },
});

export const {
  setGetProductsRequest,
  setGetProductsSuccess,
  setGetProductsError,

  setCreateProductRequest,
  setCreateProductSuccess,
  setCreateProductError,
} = adminProductSlice.actions;

export default adminProductSlice.reducer;

export const useSelectProducts = (state: AppState): TProduct[] =>
  state.adminCategory.categories;

export const createProductRequest = (data: TCreateProductForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setCreateProductRequest());
      const response = await ApiInstance.post('products', {
        ...data,
      });
      dispatch(setCreateProductSuccess(response.data));
    } catch (e) {
      dispatch(setCreateProductError());
    }
  };
};

export const getProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetProductsRequest());
      const response = await ApiInstance.get('products');
      dispatch(setGetProductsSuccess(response.data.categories));
    } catch (e) {
      dispatch(setGetProductsError());
    }
  };
};
