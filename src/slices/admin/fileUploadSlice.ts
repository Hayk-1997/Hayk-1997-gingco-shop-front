import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import ApiInstance from '../../services/axios';
import { setProductImages } from './productSlice';
import { showMessage } from '../../helpers';

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
      const { data } = await ApiInstance.put(
        `products/${id}/upload-images`,
        files
      );
      dispatch(setUploadFilesRequestSuccess());
      dispatch(setProductImages(data.productImages));
      showMessage(data.message, 'success');
    } catch (e) {
      dispatch(setUploadFilesRequestError());
    }
  };
};
