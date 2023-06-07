import React, { memo, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import useChangeRouter from '../../hooks/useChangeRouter';

import styles from './styles.module.scss';

const PriceFilters = (): JSX.Element => {
  const { query } = useRouter();
  const { changeRouter } = useChangeRouter();

  const fromInputRef = useRef<HTMLInputElement>(null);
  const toInputRef = useRef<HTMLInputElement>(null);
  const setTimerRef = useRef(null);

  const handleInputChange = useCallback(
    (value: string, key: string) => {
      if (setTimerRef.current) {
        clearTimeout(setTimerRef.current);
        setTimerRef.current = null;
      }
      changeRouter([value] as string[], key);
    },
    [changeRouter, setTimerRef]
  );

  return (
    <div className="filter left-sidebar-widget mb_50">
      <div className="heading-part mtb_20">
        <h2 className="main_title">Price Search</h2>
      </div>
      <div className="filter-block">
        <div className={styles.priceInputs}>
          <input
            type="text"
            className="form-control quantity"
            name="priceFrom"
            placeholder="from"
            value={query.from ?? ''}
            ref={fromInputRef}
            onChange={(event) => handleInputChange(event.target.value, 'from')}
          />
          <input
            type="text"
            className="form-control quantity"
            name="priceTo"
            placeholder="to"
            value={query.to ?? ''}
            ref={toInputRef}
            onChange={(event) => handleInputChange(event.target.value, 'to')}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(PriceFilters);
