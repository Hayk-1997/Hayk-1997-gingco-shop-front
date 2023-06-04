import ProductItems from './productItems';
import Filtering from "./filtering";

const ShopContainer = (): JSX.Element => {
  return (
    <div className="col-sm-8 col-lg-9 mtb_20">
      <Filtering/>
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
