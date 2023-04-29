import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { getAdminToken } from '../../helpers/auth';
import { TCreateCategory } from '../../type/category';

type TInitialState = {
  categories: [];
  createCategorySuccess: boolean;
  createCategoryError: boolean;
};

const initialState: TInitialState = {
  categories: [],
  createCategorySuccess: false,
  createCategoryError: false,
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
  },
});

export const {
  setGetCategoriesRequest,
  setGetCategoriesSuccess,
  setGetCategoriesError,

  setCreateCategoryRequest,
  setCreateCategorySuccess,
  setCreateCategoryError,
} = adminCategorySlice.actions;

export default adminCategorySlice.reducer;

export const useSelectCategories = (state: AppState) =>
  state.adminCategory.categories;

export const createCategoryRequest = (data: TCreateCategory) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setCreateCategoryRequest());
      const response = await ApiInstance.post(
        'categories',
        {
          ...data,
        },
        {
          headers: { Authorization: 'Bearer ' + getAdminToken() },
        }
      );
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
      const response = await ApiInstance.get('categories', {
        headers: { Authorization: 'Bearer ' + getAdminToken() },
      });
      dispatch(setGetCategoriesSuccess(response.data.categories));
    } catch (e) {
      dispatch(setGetCategoriesError());
    }
  };
};
