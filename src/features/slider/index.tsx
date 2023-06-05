import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TProductImage } from '../../type/web/products';

import { Thumbs, FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import 'swiper/css/thumbs';
import './swiper.module.scss';

interface TSlider {
  images: TProductImage[];
}

const Slider: React.FC<TSlider> = ({ images = [] }): JSX.Element => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image: TProductImage, index: number) => (
          <SwiperSlide key={`slide_${index}`}>
            <img
              src={image.url}
              alt=""
              className="swiper-lazy"
              width="100%"
              height="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image: TProductImage) => (
          <SwiperSlide key={image.url} className="swiper-slide-auto">
            <img src={image.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
