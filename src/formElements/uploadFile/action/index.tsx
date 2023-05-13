import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFilesRequest } from '../../../slices/admin/fileUploadSlice';
import { wrapFormData } from '../../../helpers/files';
import styles from './styles.module.scss';

const FileAction = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.files &&
        dispatch(uploadFilesRequest(wrapFormData(event.target.files!)));
    },
    [dispatch]
  );

  return (
    <div id="actions" className="row">
      <div className="col-lg-6">
        <div className="btn-group w-100">
          <label
            htmlFor="fileUpload"
            className="btn btn-success col fileinput-button dz-clickable"
          >
            <i className="fas fa-plus" />
            <input
              id="fileUpload"
              type="file"
              multiple
              className={styles.fileUpload}
              onChange={handleInputChange}
            />
            <span>Add files</span>
          </label>
        </div>
      </div>
      <div className="col-lg-6 d-flex align-items-center">
        <div className="fileupload-process w-100">
          <div
            id="total-progress"
            className="progress progress-striped active"
            role="progressbar"
            style={{ opacity: 0 }}
          >
            <div
              className="progress-bar progress-bar-success"
              style={{ width: '0%' }}
              data-dz-uploadprogress=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FileAction);
