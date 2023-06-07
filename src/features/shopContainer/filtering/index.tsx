import GridSvgIcon from '../../../icons/GridSvgIcon';
import HamburgerSvgIcon from '../../../icons/HamburgerSvgIcon';
import { useCallback, useRef } from 'react';
import useChangeRouter from '../../../hooks/useChangeRouter';
import cn from 'classnames';

import styles from './styles.module.scss';

const Filtering = (): JSX.Element => {
  const { changeRouter } = useChangeRouter();

  const handleChange = useCallback(
    (value: string, key: string) => {
      changeRouter([value] as string[], key);
    },
    [changeRouter]
  );

  return (
    <div className="category-page-wrapper mb_30">
      <div
        className={cn('list-grid-wrapper pull-left', styles.filterGridIcons)}
      >
        <GridSvgIcon />
        <HamburgerSvgIcon />
      </div>
      <div className="page-wrapper pull-right">
        <label className="control-label" htmlFor="input-limit">
          Show :
        </label>
        <div className="limit">
          <select
            id="input-limit"
            className="form-control"
            onChange={(event) => handleChange(event.target.value, 'limit')}
          >
            <option value={8}>08</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
          </select>
        </div>
        <span>
          <i className="fa fa-angle-down" />
        </span>
      </div>
      <div className="sort-wrapper pull-right">
        <label className="control-label" htmlFor="input-sort">
          Sort By :
        </label>
        <div className="sort-inner">
          <select
            id="input-sort"
            className="form-control"
            onChange={(event) => handleChange(event.target.value, 'sort')}
          >
            <option value="asc">Default</option>
            <option value="asc">Price (Low &gt; High)</option>
            <option value="desc">Price (High &gt; Low)</option>
          </select>
        </div>
        <span>
          <i className="fa fa-angle-down" />
        </span>
      </div>
    </div>
  );
};

export default Filtering;
