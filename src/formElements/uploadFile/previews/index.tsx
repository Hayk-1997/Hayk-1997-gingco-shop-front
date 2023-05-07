import React, { memo } from 'react';
import { TProductImage } from '../../../type/web/products';
import Image from 'next/image';

interface IPreviews {
  images: TProductImage[];
}

const Previews: React.FC<IPreviews> = ({ images }): JSX.Element => {
  return (
    <>
      {images?.map((image, index) => (
        <div key={index} className="table table-striped files" id="previews">
          <div className="row mt-2 dz-image-preview dz-processing dz-error dz-complete">
            <div className="col-auto">
              <span className="preview">
                <Image src={image.url} alt="image" width={80} height={80} />
              </span>
            </div>
            <div className="col d-flex align-items-center">
              <p className="mb-0">
                <span className="lead" data-dz-name="">
                  download.jpg
                </span>
                (
                <span data-dz-size="">
                  <strong>9.5</strong> KB
                </span>
                )
              </p>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="btn-group">
                <button data-dz-remove="" className="btn btn-danger delete">
                  <i className="fas fa-trash" /> <span>Delete</span>{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(Previews);
