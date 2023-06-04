import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import ApiInstance from '../../services/axios';
import { setFilteredProductImage, setProductImages } from './productSlice';
import { showMessage } from '../../helpers';

const initialState = {
  uploadFilesSuccess: false,
  uploadFilesError: false,

  removeProductImageSuccess: false,
  removeProductImageError: false,
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
    setRemoveProductImageRequest: (state) => {
      state.removeProductImageSuccess = false;
      state.removeProductImageError = false;
    },
    setRemoveProductImageRequestSuccess: (state) => {
      state.removeProductImageSuccess = true;
      state.removeProductImageError = false;
    },
    setRemoveProductImageRequestError: (state) => {
      state.removeProductImageSuccess = false;
      state.removeProductImageError = true;
    },
  },
});

export const {
  setUploadFilesRequest,
  setUploadFilesRequestSuccess,
  setUploadFilesRequestError,

  setRemoveProductImageRequest,
  setRemoveProductImageRequestSuccess,
  setRemoveProductImageRequestError,
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

export const removeProductImageRequest = (id: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setRemoveProductImageRequest());
      await ApiInstance.delete(`products/delete-image/${id}`);
      dispatch(setRemoveProductImageRequestSuccess());
      dispatch(setFilteredProductImage(id));
    } catch (e) {
      dispatch(setRemoveProductImageRequestError());
    }
  };
};
