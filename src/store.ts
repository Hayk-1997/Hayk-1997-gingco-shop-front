import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import adminAuthSlice from './slices/admin/authSlice';
import adminCategorySlice from './slices/admin/categorySlice';
import adminColorSlice from './slices/admin/colorSlice';
import adminProductSlice from './slices/admin/productSlice';

import webAuthReducer from './slices/web/authSlice';
import webProductsReducer from './slices/web/productsSlice';
import webCategoryReducer from './slices/web/categorySlice';
import webGlobalSlice from './slices/web/globalSlice';
import webShopSplice from './slices/web/shopSlice';
import webColorSlice from './slices/web/colorSlice';

import { ToolkitStore } from '@reduxjs/toolkit/src/configureStore';

export function makeStore(): ToolkitStore {
  return configureStore({
    reducer: {
      webAuth: webAuthReducer,
      adminAuth: adminAuthSlice,
      adminCategory: adminCategorySlice,
      adminColor: adminColorSlice,
      adminProduct: adminProductSlice,
      webProducts: webProductsReducer,
      webCategory: webCategoryReducer,
      webGlobal: webGlobalSlice,
      webShop: webShopSplice,
      webColor: webColorSlice,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
