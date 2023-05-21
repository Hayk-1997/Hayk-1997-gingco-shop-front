import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TCreateProductForm } from '../../type/product';
import { TProduct } from '../../type/web/products';
import { catchApiError, showMessage } from '../../helpers';

type TInitialState = {
  products: TProduct[];
  createProductSuccess: boolean;
  createProductError: boolean;
  product: TProduct | null;

  isDeleteProductSuccess: boolean;
  isDeleteProductError: boolean;
  successMessage: string;
};

const initialState: TInitialState = {
  products: [],
  createProductSuccess: false,
  createProductError: false,
  product: null,
  isDeleteProductSuccess: false,
  isDeleteProductError: false,
  successMessage: '',
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
    setGetProductByIdRequest: (state) => {
      state.product = null;
    },
    setGetProductByIdSuccess: (state, action) => {
      state.product = action.payload;
    },
    setGetProductByIdError: (state) => {
      state.product = null;
    },

    setDeleteProductRequest: (state) => {
      state.isDeleteProductSuccess = false;
      state.isDeleteProductError = false;
    },
    setDeleteProductSuccess: (state, { payload }) => {
      state.isDeleteProductSuccess = true;
      state.isDeleteProductError = false;
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
      state.successMessage = payload.message;
      showMessage(payload.message, 'success');
    },
    setDeleteProductError: (state, { payload }) => {
      state.isDeleteProductSuccess = false;
      state.isDeleteProductError = true;
      showMessage(payload, 'error');
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

  setGetProductByIdRequest,
  setGetProductByIdSuccess,
  setGetProductByIdError,

  setDeleteProductRequest,
  setDeleteProductSuccess,
  setDeleteProductError,
} = adminProductSlice.actions;

export default adminProductSlice.reducer;

export const useSelectProduct = (state: AppState): TProduct =>
  state.adminProduct.product;

export const useSelectProducts = (state: AppState): TProduct[] =>
  state.adminProduct.products;

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

export const getProductsByIdRequest = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetProductByIdRequest());
      const response = await ApiInstance.get(`products/${id}`);
      dispatch(setGetProductByIdSuccess(response.data.product));
    } catch (e) {
      dispatch(setGetProductByIdError());
    }
  };
};

export const getProductsRequest = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetProductsRequest());
      const response = await ApiInstance.get('products');
      dispatch(setGetProductsSuccess(response.data.products));
    } catch (e) {
      dispatch(setGetProductsError());
    }
  };
};

export const deleteProductRequest = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setDeleteProductRequest());
      const response = await ApiInstance.delete(`products/${id}`);
      dispatch(setDeleteProductSuccess({ id, message: response.data.message }));
    } catch (e) {
      const messages = catchApiError(e);
      dispatch(setDeleteProductError(messages));
    }
  };
};
