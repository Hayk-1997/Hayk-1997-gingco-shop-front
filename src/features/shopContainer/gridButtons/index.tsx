import React, { memo } from 'react';
import GridSvgIcon from '../../../icons/GridSvgIcon';
import HamburgerSvgIcon from '../../../icons/HamburgerSvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setProductGridView } from '../../../slices/web/globalSlice';
import styles from './styles.module.scss';

const GridButtons = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        role="presentation"
        className={styles.item}
        onClick={() => dispatch(setProductGridView('grid'))}
      >
        <GridSvgIcon />
      </div>
      <div
        role="presentation"
        className={styles.item}
        onClick={() => dispatch(setProductGridView('horizontal'))}
      >
        <HamburgerSvgIcon />
      </div>
    </>
  );
};

export default memo(GridButtons);
