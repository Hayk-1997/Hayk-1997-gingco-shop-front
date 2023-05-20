import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TCategory, TCreateCategoryForm } from '../../type/admin/category';
import { catchApiError, showMessage } from '../../helpers';

type TInitialState = {
  categories: TCategory[];
  category: TCategory | null;
  createCategorySuccess: boolean;
  createCategoryError: boolean;
  isDeletingCategory: boolean;
  isDeleteCategorySuccess: boolean;
  isDeleteCategoryFailure: boolean;
  isUpdatingCategory: boolean;
  isUpdateCategorySuccess: boolean;
  isUpdateCategoryFailure: boolean;
  successMessage: string;
  errorMessage: string;
};

const initialState: TInitialState = {
  categories: [],
  category: null,
  createCategorySuccess: false,
  createCategoryError: false,
  isDeletingCategory: false,
  isDeleteCategorySuccess: false,
  isDeleteCategoryFailure: false,
  isUpdatingCategory: false,
  isUpdateCategorySuccess: false,
  isUpdateCategoryFailure: false,
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
    setGetCategoriesSuccess: (state, action: { payload: TCategory }) => {
      state.categories = action.payload;
    },
    setGetCategoriesError: (state) => {
      state.categories = [];
    },
    setGetCategoryRequest: (state) => {
      state.category = null;
    },
    setGetCategorySuccess: (state, action: { payload: TCategory }) => {
      state.category = action.payload;
    },
    setGetCategoryError: (state) => {
      state.category = null;
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

    setUpdateCategoryRequest: (state) => {
      state.isUpdatingCategory = true;
      state.isUpdateCategorySuccess = false;
      state.isUpdateCategoryFailure = false;
    },
    setUpdateCategorySuccess: (state, { payload }) => {
      console.log('update success payload', payload);
      state.isUpdatingCategory = true;
      state.isUpdateCategorySuccess = true;
      state.isUpdateCategoryFailure = false;
      showMessage(payload.message, 'success');
    },
    setUpdateCategoryError: (state, { payload }) => {
      console.log('update error payload', payload);
      state.isUpdatingCategory = true;
      state.isUpdateCategorySuccess = false;
      state.isUpdateCategoryFailure = true;
      showMessage(payload, 'error');
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
      showMessage(payload.message, 'success');
    },
    setDeleteCategoryError: (state, { payload }) => {
      state.isDeletingCategory = false;
      state.isDeleteCategorySuccess = false;
      state.isDeleteCategoryFailure = true;

      showMessage(payload, 'error');
    },
  },
});

export const {
  setGetCategoriesRequest,
  setGetCategoriesSuccess,
  setGetCategoriesError,

  setGetCategoryRequest,
  setGetCategorySuccess,
  setGetCategoryError,

  setCreateCategoryRequest,
  setCreateCategorySuccess,
  setCreateCategoryError,

  setUpdateCategoryRequest,
  setUpdateCategorySuccess,
  setUpdateCategoryError,

  setDeleteCategoryRequest,
  setDeleteCategorySuccess,
  setDeleteCategoryError,
} = adminCategorySlice.actions;

export default adminCategorySlice.reducer;

export const useSelectCategories = (state: AppState): TCategory[] =>
  state.adminCategory.categories;

export const useSelectCategory = (state: AppState): TCategory =>
  state.adminCategory.category;

export const useSelectCategoryUpdateSuccess = (state: AppState): TCategory =>
  state.adminCategory.isUpdateCategorySuccess;

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

export const updateCategoryRequest = (
  data: TCreateCategoryForm,
  id: number
) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUpdateCategoryRequest());
      const response = await ApiInstance.put(`categories/${id}`, {
        ...data,
      });
      dispatch(setUpdateCategorySuccess(response.data));
    } catch (e) {
      const messages = catchApiError(e);
      console.log('messages', messages);
      dispatch(setUpdateCategoryError(messages));
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

export const getCategoryByIdRequest = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetCategoryRequest());
      const response = await ApiInstance.get(`categories/${id}`);
      dispatch(setGetCategorySuccess(response.data.category));
    } catch (e) {
      dispatch(setGetCategoryError());
    }
  };
};

export const deleteCategory = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setDeleteCategoryRequest());
      const response = await ApiInstance.delete(`categories/${id}`);
      dispatch(
        setDeleteCategorySuccess({ id, message: response.data.message })
      );
    } catch (e) {
      const messages = catchApiError(e);
      dispatch(setDeleteCategoryError(messages));
    }
  };
};
