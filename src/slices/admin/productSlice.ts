import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TCreateProductForm } from '../../type/product';
import { TProduct, TProductImage } from '../../type/web/products';
import { catchApiError, showMessage } from '../../helpers';

type TInitialState = {
  products: TProduct[];
  createProductSuccess: boolean;
  createProductError: boolean;
  product: TProduct | null;

  isDeleteProductSuccess: boolean;
  isDeleteProductError: boolean;
  successMessage: string;

  isUpdatingProduct: boolean;
  isUpdateProductSuccess: boolean;
  isUpdateProductFailure: boolean;
};

const initialState: TInitialState = {
  products: [],
  createProductSuccess: false,
  createProductError: false,
  product: null,
  isDeleteProductSuccess: false,
  isDeleteProductError: false,
  successMessage: '',

  isUpdatingProduct: false,
  isUpdateProductSuccess: false,
  isUpdateProductFailure: false,
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
    setProductImages: (state, action: { payload: TProductImage[] }) => {
      if (state.product) {
        state.product.images = action.payload;
      }
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

    setUpdateProductRequest: (state) => {
      state.isUpdatingProduct = true;
      state.isUpdateProductSuccess = false;
      state.isUpdateProductFailure = false;
    },

    setUpdateProductSuccess: (state) => {
      state.isUpdatingProduct = false;
      state.isUpdateProductSuccess = true;
      state.isUpdateProductFailure = false;
    },

    setUpdateProductError: (state) => {
      state.isUpdatingProduct = false;
      state.isUpdateProductSuccess = false;
      state.isUpdateProductFailure = true;
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

  setProductImages,

  setUpdateProductRequest,
  setUpdateProductSuccess,
  setUpdateProductError,
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

export const updateProductRequest = (data: TCreateProductForm, id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUpdateProductRequest());
      const response = await ApiInstance.put(`products/${id}`, {
        ...data,
      });
      dispatch(setUpdateProductSuccess(response.data));
      showMessage(response.data.message, 'success');
    } catch (e) {
      const messages = catchApiError(e);
      dispatch(setUpdateProductError(messages));
    }
  };
};
