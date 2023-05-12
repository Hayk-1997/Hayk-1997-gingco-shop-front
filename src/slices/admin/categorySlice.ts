import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TCreateCategory } from '../../type/admin/category';

type TInitialState = {
  categories: [];
  createCategorySuccess: boolean;
  createCategoryError: boolean;
  isDeletingCategory: boolean,
  isDeletedCategorySuccess: boolean,
  isDeletedCategoryFailure: boolean,
};

const initialState: TInitialState = {
  categories: [],
  createCategorySuccess: false,
  createCategoryError: false,
  isDeletingCategory: false,
  isDeletedCategorySuccess: false,
  isDeletedCategoryFailure: false,
};

export const adminCategorySlice = createSlice({
  name: 'admin/category',
  initialState,
  reducers: {
    setGetCategoriesRequest: (state) => {
      state.categories = [];
    },
    setGetCategoriesSuccess: (state, action) => {
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
      state.isDeletedCategorySuccess = false;
      state.isDeletedCategoryFailure = false;
    },
    setDeleteCategorySuccess: (state) => {
      state.isDeletingCategory = false;
      state.isDeletedCategorySuccess = true;
      state.isDeletedCategoryFailure = false;
    },
    setDeleteCategoryError: (state) => {
      state.isDeletingCategory = false;
      state.isDeletedCategorySuccess = false;
      state.isDeletedCategoryFailure = true;
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

export const useSelectCategories = (state: AppState) =>
  state.adminCategory.categories;

export const createCategoryRequest = (data: TCreateCategory) => {
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

export const getCategories = () => {
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
      dispatch(setDeleteCategorySuccess(response.data));
    } catch (e) {
      dispatch(setDeleteCategoryError());
    }
  };
};
