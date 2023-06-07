import GridSvgIcon from '../../../icons/GridSvgIcon';
import HamburgerSvgIcon from '../../../icons/HamburgerSvgIcon';
import cn from 'classnames';

import styles from './styles.module.scss';

const Filtering = (): JSX.Element => {
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
          <select id="input-limit" className="form-control">
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
          <select id="input-sort" className="form-control">
            <option value="ASC">Default</option>
            <option value="ASC">Name (A - Z)</option>
            <option value="DESC">Name (Z - A)</option>
            <option value="ASC">Price (Low &gt; High)</option>
            <option value="DESC">Price (High &gt; Low)</option>
            <option value="DESC">Rating (Highest)</option>
            <option value="ASC">Rating (Lowest)</option>
            <option value="ASC">Model (A - Z)</option>
            <option value="DESC">Model (Z - A)</option>
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
