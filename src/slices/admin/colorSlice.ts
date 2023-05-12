import { createSlice } from '@reduxjs/toolkit';
import { TColor, TCreateColorForm } from '../../type/color';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';

type TInitialState = {
  colors: TColor[];
  color: TColor | null;
  getColorsSuccess: boolean;
  getColorsError: boolean;

  createColorRequestSuccess: boolean;
  createColorRequestError: boolean;
};

const initialState: TInitialState = {
  colors: [],
  color: null,
  getColorsSuccess: false,
  getColorsError: false,

  createColorRequestSuccess: false,
  createColorRequestError: false,
};

const colorSlice = createSlice({
  name: 'admin/color',
  initialState,
  reducers: {
    setGetColorsRequest: (state) => {
      state.getColorsSuccess = false;
      state.getColorsError = false;
      state.colors = [];
    },
    setGetColorsRequestSuccess: (state, action: { payload: TColor[] }) => {
      state.getColorsSuccess = true;
      state.getColorsError = false;
      state.colors = action.payload;
    },
    setGetColorsRequestError: (state) => {
      state.getColorsSuccess = false;
      state.getColorsError = true;
      state.colors = [];
    },
    setCreateColorRequest: (state) => {
      state.createColorRequestSuccess = false;
      state.createColorRequestError = false;
    },
    setCreateColorRequestSuccess: (state) => {
      state.createColorRequestSuccess = true;
      state.createColorRequestError = false;
    },
    setCreateColorRequestError: (state) => {
      state.createColorRequestSuccess = false;
      state.createColorRequestError = false;
    },
    setGetColorByIdRequest: (state) => {
      state.color = null;
    },
    setGetColorByIdSuccess: (state, action: { payload: TColor }) => {
      state.color = action.payload;
    },
    setGetColorByIdError: (state) => {
      state.color = null;
    },
  },
});

export const {
  setGetColorsRequest,
  setGetColorsRequestSuccess,
  setGetColorsRequestError,

  setCreateColorRequest,
  setCreateColorRequestSuccess,
  setCreateColorRequestError,

  setGetColorByIdRequest,
  setGetColorByIdSuccess,
  setGetColorByIdError,
} = colorSlice.actions;

export default colorSlice.reducer;

export const useSelectColors = (state: AppState): TColor[] =>
  state.adminColor.colors;

export const useSelectColor = (state: AppState): TColor =>
  state.adminColor.color;

export const getColorsRequest = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetColorsRequest);
      const response = await ApiInstance.get('colors');
      dispatch(setGetColorsRequestSuccess(response.data.colors));
    } catch (e) {
      dispatch(setGetColorsRequestError());
    }
  };
};

export const createColorRequest = (data: TCreateColorForm) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setCreateColorRequest());
      await ApiInstance.post('colors', { ...data });
      dispatch(setCreateColorRequestSuccess());
    } catch (e) {
      dispatch(setCreateColorRequestError());
    }
  };
};

export const getColorByIdRequest = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setGetColorByIdRequest());
      const response = await ApiInstance.get(`colors/${id}`);
      dispatch(setGetColorByIdSuccess(response.data.product));
    } catch (e) {
      dispatch(setGetColorByIdError());
    }
  };
};
