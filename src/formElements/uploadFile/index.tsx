import React, { memo } from 'react';
import FileAction from './action';
import Previews from './previews';
import { UseControllerProps } from 'react-hook-form';
import { TProductImage } from '../../type/web/products';

interface IUploadFile extends UseControllerProps<any> {
  withError?: boolean;
  images: TProductImage[]; //@TODO need to check that images have the same structure
}

const UploadFile: React.FC<IUploadFile> = ({ images }): JSX.Element => {
  return (
    <>
      <FileAction />
      <Previews images={images} />
    </>
  );
};

export default memo(UploadFile);
