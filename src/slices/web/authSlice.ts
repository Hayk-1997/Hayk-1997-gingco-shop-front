import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch, AppState } from '../../store';
import ApiInstance from '../../services/axios';
import { TUser, TUserLogin, TUserRegistration } from '../../type/web/auth';
import { setUserToken } from '../../helpers/auth';

type TInitialState = {
  user: TUser;
  loginSuccess: boolean;
  loginError: boolean;

  registerSuccess: boolean;
  registerError: boolean;
};

const initialState: TInitialState = {
  user: {} as TUser,
  loginSuccess: false,
  loginError: false,

  registerSuccess: false,
  registerError: false,
};

export const authSlice = createSlice({
  name: 'web/auth',
  initialState,
  reducers: {
    setLoginRequest: (state) => {
      state.loginSuccess = false;
      state.loginError = false;
    },
    setLoginRequestSuccess: (
      state,
      action: { payload: { token: string; user: TUser } }
    ) => {
      const { token, user } = action.payload;
      setUserToken(token);
      state.user = user;
      state.loginSuccess = true;
      state.loginError = false;
    },
    setLoginRequestError: (state) => {
      state.loginSuccess = false;
      state.loginError = true;
    },
    clearLoginRequestStatus: (state) => {
      state.loginSuccess = false;
      state.loginError = false;
    },
    setRegisterRequest: (state) => {
      state.registerSuccess = false;
      state.registerError = false;
    },
    setRegisterRequestSuccess: (state) => {
      state.registerSuccess = true;
      state.registerError = false;
    },
    setRegisterRequestError: (state) => {
      state.registerSuccess = false;
      state.registerError = true;
    },
  },
});

export const {
  setLoginRequest,
  setLoginRequestSuccess,
  setLoginRequestError,
  clearLoginRequestStatus,

  setRegisterRequest,
  setRegisterRequestSuccess,
  setRegisterRequestError,
} = authSlice.actions;

export default authSlice.reducer;

export const useSelectLoginSuccess = (state: AppState): boolean =>
  state.webAuth.loginSuccess;

export const useSelectLoginError = (state: AppState): boolean =>
  state.webAuth.loginError;

export const useSelectRegisterSuccess = (state: AppState): boolean =>
  state.webAuth.registerSuccess;

export const useSelectRegisterError = (state: AppState): boolean =>
  state.webAuth.registerError;

// @TODO need to complete the all flow
export const userLoginRequest = (data: TUserLogin) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoginRequest());
      const response = await ApiInstance.post('auth/login', {
        ...data,
      });
      dispatch(setLoginRequestSuccess(response.data));
    } catch (e) {
      dispatch(setLoginRequestError());
    }
  };
};

export const userRegisterRequest = (data: TUserRegistration) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setRegisterRequest());
      await ApiInstance.post('auth/register', {
        ...data,
      });
      dispatch(setRegisterRequestSuccess());
    } catch (e) {
      dispatch(setRegisterRequestError());
    }
  };
};
