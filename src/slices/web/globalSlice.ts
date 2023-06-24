import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../store';
import { TProductGridView } from '../../type/web/global';
import { TProductShopCart } from '../../type/product';

type TInitialState = {
  productGridView: TProductGridView;
  shopCart: string | null;
};

const initialState: TInitialState = {
  productGridView: 'grid',
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
  },
});

export const { setProductGridView, setShopCart } = webGlobalSlice.actions;

export default webGlobalSlice.reducer;

export const useSelectProductGridView = (state: AppState): TProductGridView =>
  state.webGlobal.productGridView;

export const useSelectShopCart = (state: AppState): TProductShopCart[] | null =>
  state.webGlobal.shopCart ? JSON.parse(state.webGlobal.shopCart) : null;
