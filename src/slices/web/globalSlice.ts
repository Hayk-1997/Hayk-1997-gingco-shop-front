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
  isUpdatingCartProductQuantity: boolean;
  isUpdatingCartProductQuantitySuccess: boolean;
  isUpdatingCartProductQuantityFailure: boolean;
  isDeletingCartProduct: boolean;
  isDeletingCartProductSuccess: boolean;
  isDeletingCartProductFailure: boolean;
};

const initialState: TInitialState = {
  productGridView: 'grid',
  cartProducts: [],
  isAddingProductToCart: false,
  isAddProductToCartSuccess: false,
  isAddProductToCartFailure: false,
  errorMessage: '',
  isUpdatingCartProductQuantity: false,
  isUpdatingCartProductQuantitySuccess: false,
  isUpdatingCartProductQuantityFailure: false,
  isDeletingCartProduct: false,
  isDeletingCartProductSuccess: false,
  isDeletingCartProductFailure: false,
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
    setAddProductsToCartRequest: (state) => {
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
    setUpdateCartProductQuantityRequest: (state) => {
      state.isUpdatingCartProductQuantity = true;
      state.isUpdatingCartProductQuantitySuccess = false;
      state.isUpdatingCartProductQuantityFailure = false;
    },
    setUpdateCartProductQuantityRequestSuccess: (state) => {
      state.isUpdatingCartProductQuantity = false;
      state.isUpdatingCartProductQuantitySuccess = true;
      state.isUpdatingCartProductQuantityFailure = false;
    },
    setUpdateCartProductQuantityRequestFailure: (state) => {
      state.isUpdatingCartProductQuantity = false;
      state.isUpdatingCartProductQuantitySuccess = false;
      state.isUpdatingCartProductQuantityFailure = true;
    },

    setDeleteCartProductRequest: (state) => {
      state.isDeletingCartProduct = true;
      state.isDeletingCartProductSuccess = false;
      state.isDeletingCartProductFailure = false;
    },
    setDeleteCartProductRequestSuccess: (state, { payload }) => {
      state.isDeletingCartProduct = false;
      state.isDeletingCartProductSuccess = true;
      state.isDeletingCartProductFailure = false;
      state.cartProducts = state.cartProducts.filter(
        ({ id }) => id !== payload
      );
    },
    setDeleteCartProductRequestFailure: (state) => {
      state.isDeletingCartProduct = false;
      state.isDeletingCartProductSuccess = false;
      state.isDeletingCartProductFailure = true;
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
  setUpdateCartProductQuantityRequest,
  setUpdateCartProductQuantityRequestSuccess,
  setUpdateCartProductQuantityRequestFailure,
  setDeleteCartProductRequest,
  setDeleteCartProductRequestSuccess,
  setDeleteCartProductRequestFailure,
} = webGlobalSlice.actions;

export default webGlobalSlice.reducer;

export const useSelectProductGridView = (state: AppState): TProductGridView =>
  state.webGlobal.productGridView;

export const useSelectShopCart = (state: AppState): TProductShopCart[] | null =>
  state.webGlobal.shopCart ? JSON.parse(state.webGlobal.shopCart) : null;

export const useSelectCartProducts = (state: AppState): any[] =>
  state.webGlobal.cartProducts;

export const useSelectIsUpdatingCartProduct = (state: AppState): boolean =>
  state.webGlobal.isUpdatingCartProductQuantity;

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

// @ts-ignore
export const updateCartProductQuantity = ({ id, quantity }) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUpdateCartProductQuantityRequest());
      await ApiInstance.put(`user/cart/${id}`, { quantity });
      dispatch(setUpdateCartProductQuantityRequestSuccess());
    } catch (e) {
      dispatch(setUpdateCartProductQuantityRequestFailure());
    }
  };
};

// @ts-ignore
export const deleterCartProductQuantity = ({ id }) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setDeleteCartProductRequest());
      await ApiInstance.delete(`user/cart/${id}`);
      dispatch(setDeleteCartProductRequestSuccess(id));
    } catch (e) {
      dispatch(setDeleteCartProductRequestFailure());
    }
  };
};
