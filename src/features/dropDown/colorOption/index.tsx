import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getColorsRequest,
  useSelectColors,
} from '../../../slices/web/colorSlice';
import { useRouter } from 'next/router';
import { TLanguageKeys } from '../../../type/language';

const ColorOption = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const colors = useSelector(useSelectColors);
  const { locale: activeLocale } = router;

  useEffect(() => {
    dispatch(getColorsRequest());
  }, [dispatch]);

  return (
    <>
      <label htmlFor="select-by-color">Color</label>
      <select
        name="product_color"
        id="select-by-color"
        className="selectpicker form-control"
      >
        {colors.map((color, index) => (
          <option key={index}>
            {color.translations[activeLocale as TLanguageKeys].name}
          </option>
        ))}
      </select>
    </>
  );
};

export default memo(ColorOption);
