import React, { memo } from 'react';
import GridSvgIcon from '../../../icons/GridSvgIcon';
import HamburgerSvgIcon from '../../../icons/HamburgerSvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProductGridView,
  useSelectProductGridView,
} from '../../../slices/web/globalSlice';
import { PRODUCT_GRID_VIEW } from '../../../type/web/global';
import cn from 'classnames';

import styles from './styles.module.scss';

const GridButtons = (): JSX.Element => {
  const dispatch = useDispatch();
  const activeGrid = useSelector(useSelectProductGridView);

  return (
    <>
      <div
        role="presentation"
        className={cn(styles.item, {
          [styles.activeItem]: activeGrid === PRODUCT_GRID_VIEW.GRID,
        })}
        onClick={() => dispatch(setProductGridView(PRODUCT_GRID_VIEW.GRID))}
      >
        <GridSvgIcon />
      </div>
      <div
        role="presentation"
        className={cn(styles.item, {
          [styles.activeItem]: activeGrid === PRODUCT_GRID_VIEW.HORIZONTAL,
        })}
        onClick={() =>
          dispatch(setProductGridView(PRODUCT_GRID_VIEW.HORIZONTAL))
        }
      >
        <HamburgerSvgIcon />
      </div>
    </>
  );
};

export default memo(GridButtons);
