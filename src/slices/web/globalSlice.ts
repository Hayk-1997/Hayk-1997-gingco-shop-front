import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../store';
import { TProductGridView } from '../../type/web/global';

type TInitialState = {
  productGridView: TProductGridView;
};

const initialState: TInitialState = {
  productGridView: 'grid',
};

export const webGlobalSlice = createSlice({
  name: 'web/global',
  initialState,
  reducers: {
    setProductGridView: (state, action) => {
      state.productGridView = action.payload;
    },
  },
});

export const { setProductGridView } = webGlobalSlice.actions;

export default webGlobalSlice.reducer;

export const useSelectProductGridView = (state: AppState): TProductGridView =>
  state.webGlobal.productGridView;
