import { TProductImage } from '../../../type/web/products';
import Image from 'next/image';
import React from 'react';

interface IThumbnail {
  images: TProductImage[];
}

const Thumbnail: React.FC<IThumbnail> = ({ images }): JSX.Element => {
  return (
    <div id="product-thumbnail" className="owl-carousel owl-loaded owl-drag">
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            transform: 'translate3d(0px, 0px, 0px)',
            transition: 'all 0s ease 0s',
            width: '597px',
          }}
        >
          {images?.map((image: TProductImage) => {
            return (
              <div
                className="owl-item active"
                key={image.url}
                style={{ width: '85.25px' }}
              >
                <div className="item">
                  <div className="image-additional">
                    <a
                      className="thumbnail"
                      href={image.url}
                      data-fancybox="group1"
                    >
                      <Image
                        src={image.url}
                        alt="main_banner"
                        width={1903}
                        height={1903}
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
