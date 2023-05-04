import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TProduct, TProductsState } from '../../type/web/products';
import { catchApiError } from '../../helpers';

const initialState: TProductsState = {
  products: [] as TProduct[],
  isGettingProduct: false,
  isGetProductSuccess: false,
  isGetProductFailure: false,

  product: {} as TProduct,
  isGettingProducts: false,
  isGetProductsSuccess: false,
  isGetProductsFailure: false,

  successMessage: '',
  errorMessage: '',
};

export const productsSlice = createSlice({
  name: 'web/products',
  initialState,
  reducers: {
    setGetProductRequest: (state) => {
      state.isGettingProduct = true;
      state.isGetProductSuccess = false;
      state.isGetProductFailure = false;
      state.product = {} as TProduct;
    },
    setGetProductRequestSuccess: (
      state,
      action: { payload: { product: TProduct } }
    ) => {
      state.product = action.payload.product;
      state.isGettingProduct = false;
      state.isGetProductSuccess = true;
    },
    setGetProductRequestFailure: (
      state,
      action: { payload: { message: string } }
    ) => {
      state.isGettingProduct = false;
      state.isGetProductFailure = true;
      state.errorMessage = action.payload.message;
    },
    clearGetProductRequestStatus: (state) => {
      state.isGettingProduct = true;
      state.isGetProductSuccess = false;
      state.isGetProductFailure = false;
    },
  },
});

export const {
  setGetProductRequest,
  setGetProductRequestSuccess,
  setGetProductRequestFailure,
  clearGetProductRequestStatus,
} = productsSlice.actions;

export default productsSlice.reducer;

export const useSelectProducts = (state: AppState): TProduct[] =>
  state.webProducts.products;
export const useSelectProduct = (state: AppState): TProduct[] =>
  state.webProducts.product;
export const useSelectGetProductSuccess = (state: AppState): boolean =>
  state.webProducts.isGetProductSuccess;

export const useSelectGetProductFailure = (state: AppState): boolean =>
  state.webProducts.isGetProductFailure;


export const getProductRequest = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetProductRequest());
      const response = await ApiInstance.get(`products/${id}`);
      dispatch(setGetProductRequestSuccess(response.data));
    } catch (e) {
      // TODO: add needed cases for handling errors message or validator errors
      const messages = catchApiError(e);
      dispatch(setGetProductRequestFailure(messages));
    }
  };
};
