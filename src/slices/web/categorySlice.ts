import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TCategory } from '../../type/admin/category';

type TInitialState = {
  categories: TCategory[];
};

const initialState: TInitialState = {
  categories: [],
};

export const webCategorySlice = createSlice({
  name: 'web/category',
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
  },
});

export const {
  setGetCategoriesRequest,
  setGetCategoriesSuccess,
  setGetCategoriesError,
} = webCategorySlice.actions;

export default webCategorySlice.reducer;

export const useSelectCategories = (state: AppState): TCategory[] =>
  state.webCategory.categories;

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
