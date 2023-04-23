import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TUserLogin } from '../../type/web/auth';

const initialState = {
  loginSuccess: false,
  loginError: false,
};

export const authSlice = createSlice({
  name: 'web/auth',
  initialState,
  reducers: {
    setLoginRequest: (state) => {
      state.loginSuccess = false;
      state.loginError = false;
    },
    setLoginRequestSuccess: () => {
      //
    },
    setLoginRequestError: (state) => {
      state.loginSuccess = false;
      state.loginError = true;
    },
  },
});

export const { setLoginRequest, setLoginRequestSuccess, setLoginRequestError } =
  authSlice.actions;

export default authSlice.reducer;

export const useSelectLoginSuccess = (state: AppState): boolean =>
  state.webAuth.loginSuccess;

export const useSelectLoginError = (state: AppState): boolean =>
  state.webAuth.loginError;

// @TODO need to complete the all flow
export const userLoginRequest = ({ email, password }: TUserLogin) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoginRequest());
      const response = await ApiInstance.post('auth/login', {
        email,
        password,
      });
      console.log('response', response);
      dispatch(setLoginRequestSuccess());
    } catch (e) {
      dispatch(setLoginRequestError());
    }
  };
};
