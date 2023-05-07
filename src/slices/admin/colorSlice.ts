import { createSlice } from '@reduxjs/toolkit';
import { TColor } from '../../type/color';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';

type TInitialState = {
  colors: TColor[];
  getColorsSuccess: boolean;
  getColorsError: boolean;
};

const initialState: TInitialState = {
  colors: [],
  getColorsSuccess: false,
  getColorsError: false,
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
  },
});

export const {
  setGetColorsRequest,
  setGetColorsRequestSuccess,
  setGetColorsRequestError,
} = colorSlice.actions;

export default colorSlice.reducer;

export const useSelectColors = (state: AppState): TColor[] =>
  state.adminColor.colors;

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
