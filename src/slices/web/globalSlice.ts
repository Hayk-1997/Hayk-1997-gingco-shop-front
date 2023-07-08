import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import { TProductGridView } from '../../type/web/global';
import { TProductShopCart } from '../../type/product';
import ApiInstance from '../../services/axios';
import { catchApiError } from '../../helpers';
import {
  setGetProductsRequest,
  setGetProductsRequestFailure,
  setGetProductsRequestSuccess,
} from './productsSlice';

type TInitialState = {
  productGridView: TProductGridView;
  shopCart: string | null;
  cartProducts: any[];
  isAddingProductToCart: boolean;
  isAddProductToCartSuccess: boolean;
  isAddProductToCartFailure: boolean;
  errorMessage: string;
};

const initialState: TInitialState = {
  productGridView: 'grid',
  cartProducts: [],
  isAddingProductToCart: false,
  isAddProductToCartSuccess: false,
  isAddProductToCartFailure: false,
  errorMessage: '',
  shopCart:
    typeof window !== 'undefined' ? localStorage.getItem('shop-cart') : null,
};

export const webGlobalSlice = createSlice({
  name: 'web/global',
  initialState,
  reducers: {
    setProductGridView: (state, action) => {
      state.productGridView = action.payload;
    },
    setShopCart: (state, action) => {
      state.shopCart = action.payload;
      localStorage.setItem('shop-cart', action.payload);
    },
    clearShopCart: (state) => {
      state.shopCart = null;
      localStorage.removeItem('shop-cart');
    },

    setGetCartProductsRequest: (state) => {
      state.cartProducts = [];
    },
    setGetCartProductsRequestSuccess: (state, action: { payload: any }) => {
      state.cartProducts = action.payload;
    },
    setGetCartProductsRequestFailure: (state) => {
      state.cartProducts = [];
    },

    setAddProductsToCartRequest: (state, action) => {
      state.isAddingProductToCart = true;
      state.isAddProductToCartSuccess = false;
      state.isAddProductToCartFailure = false;
    },
    setAddProductsToCartSuccess: (
      state,
      { payload: { cartProducts } }: any
    ) => {
      state.isAddingProductToCart = false;
      state.isAddProductToCartSuccess = true;
      state.cartProducts = [...state.cartProducts, ...cartProducts];
    },
    setAddProductsToCartFailure: (state, { payload }) => {
      state.shopCart = null;
      state.errorMessage = payload.message;
    },
  },
});

export const {
  setProductGridView,
  setShopCart,
  setGetCartProductsRequest,
  setGetCartProductsRequestSuccess,
  setGetCartProductsRequestFailure,
  setAddProductsToCartRequest,
  setAddProductsToCartSuccess,
  setAddProductsToCartFailure,
} = webGlobalSlice.actions;

export default webGlobalSlice.reducer;

export const useSelectProductGridView = (state: AppState): TProductGridView =>
  state.webGlobal.productGridView;

export const useSelectShopCart = (state: AppState): TProductShopCart[] | null =>
  state.webGlobal.shopCart ? JSON.parse(state.webGlobal.shopCart) : null;

export const useSelectCartProducts = (state: AppState): any[] =>
  state.webGlobal.cartProducts;

export const getCartProducts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetCartProductsRequest());
      const response = await ApiInstance.get(`user/cart`);
      dispatch(setGetCartProductsRequestSuccess(response.data.cartProducts));
    } catch (e) {
      const messages = catchApiError(e);
      dispatch(setGetCartProductsRequestFailure(messages));
    }
  };
};

export const addProductsToCart = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetProductsRequest());
      const response = await ApiInstance.get(`products`);
      dispatch(setGetProductsRequestSuccess(response.data.products));
    } catch (e) {
      const messages = catchApiError(e);
      dispatch(setGetProductsRequestFailure(messages));
    }
  };
};
