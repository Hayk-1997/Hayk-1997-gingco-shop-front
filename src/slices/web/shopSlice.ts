import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { catchApiError, showMessage } from '../../helpers';
import {
  TProduct,
  TShopProducts,
  TShopProductState,
} from '../../type/web/products';

const initialState: TShopProductState = {
  products: {
    products: [] as TProduct[],
    count: 0,
  },
  isGetProductsSuccess: false,
  isGetProductsFailure: false,
};

export const shopSlice = createSlice({
  name: 'web/shop',
  initialState,
  reducers: {
    setGetShopProductsRequest: (state) => {
      state.isGetProductsSuccess = false;
      state.isGetProductsFailure = false;
    },
    setGetShopProductsRequestSuccess: (
      state,
      action: { payload: TShopProducts }
    ) => {
      state.products = action.payload;
      state.isGetProductsSuccess = true;
      state.isGetProductsFailure = false;
    },
    setGetShopProductsRequestFailure: (state, { payload }) => {
      state.isGetProductsSuccess = false;
      state.isGetProductsFailure = true;
      showMessage(payload, 'error');
    },
  },
});

export const {
  setGetShopProductsRequest,
  setGetShopProductsRequestSuccess,
  setGetShopProductsRequestFailure,
} = shopSlice.actions;

export default shopSlice.reducer;

export const useSelectShopProducts = (state: AppState): TShopProducts =>
  state.webShop.products;

export const getShopProductRequest = (query: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetShopProductsRequest());
      const response = await ApiInstance.get(`products/${query}`);
      dispatch(setGetShopProductsRequestSuccess(response.data));
    } catch (e) {
      // TODO: add needed cases for handling errors message or validator errors
      const messages = catchApiError(e);
      dispatch(setGetShopProductsRequestFailure(messages));
    }
  };
};
