import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TCategory, TCreateCategoryForm } from '../../type/admin/category';
import { catchApiError, showMessage } from "../../helpers";

type TInitialState = {
  categories: TCategory[];
  createCategorySuccess: boolean;
  createCategoryError: boolean;
  isDeletingCategory: boolean,
  isDeleteCategorySuccess: boolean,
  isDeleteCategoryFailure: boolean,
  successMessage: string,
  errorMessage: string,
};

const initialState: TInitialState = {
  categories: [],
  createCategorySuccess: false,
  createCategoryError: false,
  isDeletingCategory: false,
  isDeleteCategorySuccess: false,
  isDeleteCategoryFailure: false,
  successMessage: '',
  errorMessage: '',
};

export const adminCategorySlice = createSlice({
  name: 'admin/category',
  initialState,
  reducers: {
    setGetCategoriesRequest: (state) => {
      state.categories = [];
    },
    setGetCategoriesSuccess: (state, action: { payload: TCategory[] }) => {
      state.categories = action.payload;
    },
    setGetCategoriesError: (state) => {
      state.categories = [];
    },
    setCreateCategoryRequest: (state) => {
      state.createCategorySuccess = false;
      state.createCategoryError = false;
    },
    setCreateCategorySuccess: (state) => {
      state.createCategorySuccess = true;
      state.createCategoryError = false;
    },
    setCreateCategoryError: (state) => {
      state.createCategorySuccess = false;
      state.createCategoryError = true;
    },
    setDeleteCategoryRequest: (state) => {
      state.isDeletingCategory = true;
      state.isDeleteCategorySuccess = false;
      state.isDeleteCategoryFailure = false;
    },
    setDeleteCategorySuccess: (state, { payload }) => {
      state.categories = state.categories.filter(({ id }) => id !== payload.id);
      state.isDeletingCategory = false;
      state.isDeleteCategorySuccess = true;
      state.isDeleteCategoryFailure = false;
      state.successMessage = payload.message;
      showMessage(payload.message, 'success')
    },
    setDeleteCategoryError: (state, { payload }) => {
      state.isDeletingCategory = false;
      state.isDeleteCategorySuccess = false;
      state.isDeleteCategoryFailure = true;

      showMessage(payload, 'error')
    },
  },
});

export const {
  setGetCategoriesRequest,
  setGetCategoriesSuccess,
  setGetCategoriesError,

  setCreateCategoryRequest,
  setCreateCategorySuccess,
  setCreateCategoryError,

  setDeleteCategoryRequest,
  setDeleteCategorySuccess,
  setDeleteCategoryError,
} = adminCategorySlice.actions;

export default adminCategorySlice.reducer;

export const useSelectCategories = (state: AppState): TCategory[] =>
  state.adminCategory.categories;

export const createCategoryRequest = (data: TCreateCategoryForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setCreateCategoryRequest());
      const response = await ApiInstance.post('categories', {
        ...data,
      });
      dispatch(setCreateCategorySuccess(response.data));
    } catch (e) {
      dispatch(setCreateCategoryError());
    }
  };
};

export const getCategoriesRequest = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetCategoriesRequest());
      const response = await ApiInstance.get('categories/list');
      dispatch(setGetCategoriesSuccess(response.data.categories));
    } catch (e) {
      dispatch(setGetCategoriesError());
    }
  };
};

export const deleteCategory = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setDeleteCategoryRequest());
      const response = await ApiInstance.delete(`categories/${id}`);
      dispatch(setDeleteCategorySuccess({ id, message: response.data.message }));
    } catch (e) {
      const messages = catchApiError(e);
      dispatch(setDeleteCategoryError(messages));
    }
  };
};
