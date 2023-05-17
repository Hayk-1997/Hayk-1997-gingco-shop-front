import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import ApiInstance from '../../services/axios';

const initialState = {
  uploadFilesSuccess: false,
  uploadFilesError: false,
};

const fileUploadSlice = createSlice({
  name: 'admin/fileUpload',
  initialState,
  reducers: {
    setUploadFilesRequest: (state) => {
      state.uploadFilesSuccess = false;
      state.uploadFilesError = false;
    },
    setUploadFilesRequestSuccess: (state) => {
      state.uploadFilesSuccess = true;
      state.uploadFilesError = false;
    },
    setUploadFilesRequestError: (state) => {
      state.uploadFilesSuccess = false;
      state.uploadFilesError = true;
    },
  },
});

export const {
  setUploadFilesRequest,
  setUploadFilesRequestSuccess,
  setUploadFilesRequestError,
} = fileUploadSlice.actions;

export default fileUploadSlice.reducer;

export const uploadFilesRequest = (id: string, files: FormData) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUploadFilesRequest());
      await ApiInstance.put(`products/${id}/upload-images`, files);
      setUploadFilesRequestSuccess();
    } catch (e) {
      dispatch(setUploadFilesRequestError());
    }
  };
};
