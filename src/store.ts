import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from './features/counter/counterSlice';
import webAuthReducer from './slices/web/authSlice';
import { ToolkitStore } from '@reduxjs/toolkit/src/configureStore';

export function makeStore(): ToolkitStore {
  return configureStore({
    reducer: {
      counter: counterReducer,
      webAuth: webAuthReducer,
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
