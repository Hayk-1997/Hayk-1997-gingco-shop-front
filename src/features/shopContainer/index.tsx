import ProductItems from './productItems';

const ShopContainer = (): JSX.Element => {
  return (
    <div className="col-sm-8 col-lg-9 mtb_20">
      <div className="category-page-wrapper mb_30">
        <div className="list-grid-wrapper pull-left">
          <div className="btn-group btn-list-grid">
            <button
              type="button"
              id="grid-view"
              className="btn btn-default grid-view active"
            />
            <button
              type="button"
              id="list-view"
              className="btn btn-default list-view"
            />
          </div>
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
      <div className="row">
        <ProductItems />
      </div>
      <div className="pagination-nav text-center mt_50">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-angle-left" />
            </a>
          </li>
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-angle-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShopContainer;
