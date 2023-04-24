const ProductDetail = (): JSX.Element => {
  return (
    <div className="col-md-6 prodetail caption product-thumb">
      <h4 data-name="product_name" className="product-name">
        <a href="#" title="Casual Shirt With Ruffle Hem">
          New LCDScreen and HD Video Recording
        </a>
      </h4>
      <div className="rating">
        <span className="fa fa-stack">
          <i className="fa fa-star-o fa-stack-1x" />
          <i className="fa fa-star fa-stack-1x" />
        </span>
        <span className="fa fa-stack">
          <i className="fa fa-star-o fa-stack-1x" />
          <i className="fa fa-star fa-stack-1x" />
        </span>
        <span className="fa fa-stack">
          <i className="fa fa-star-o fa-stack-1x" />
          <i className="fa fa-star fa-stack-1x" />
        </span>
        <span className="fa fa-stack">
          <i className="fa fa-star-o fa-stack-1x" />
          <i className="fa fa-star fa-stack-1x" />
        </span>
        <span className="fa fa-stack">
          <i className="fa fa-star-o fa-stack-1x" />
          <i className="fa fa-star fa-stack-x" />
        </span>
      </div>
      <span className="price mb_20">
        <span className="amount">
          <span className="currencySymbol">$</span>70.00
        </span>
      </span>
      <hr />
      <ul className="list-unstyled product_info mtb_20">
        <li>
          <label>Brand:</label>
          <span>
            {' '}
            <a href="#">Apple</a>
          </span>
        </li>
        <li>
          <label>Product Code:</label>
          <span> product 20</span>
        </li>
        <li>
          <label>Availability:</label>
          <span> In Stock</span>
        </li>
      </ul>
      <hr />
      <p className="product-desc mtb_30">
        {' '}
        More room to move. With 80GB or 160GB of storage and up to 40 hours of
        battery life, the new iPod classic lets you enjoy up to 40,000 songs or
        up to 200 hours of video or any combination wherever you go. Cover Flow.
        Browse through your music collection by flipping..
      </p>
      <div id="product">
        <div className="form-group">
          <div className="row">
            <div className="Sort-by col-md-6">
              <label>Sort by</label>
              <select
                name="product_size"
                id="select-by-size"
                className="selectpicker form-control"
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="Color col-md-6">
              <label>Color</label>
              <select
                name="product_color"
                id="select-by-color"
                className="selectpicker form-control"
              >
                <option>Blue</option>
                <option>Green</option>
                <option>Orange</option>
                <option>White</option>
              </select>
            </div>
          </div>
        </div>
        <div className="qty mt_30 form-group2">
          <label>Qty</label>
          <input
            name="product_quantity"
            min={1}
            defaultValue={1}
            type="number"
          />
        </div>
        <div className="button-group mt_30">
          <div className="add-to-cart">
            <a href="#">
              <span>Add to cart</span>
            </a>
          </div>
          <div className="wishlist">
            <a href="#">
              <span>wishlist</span>
            </a>
          </div>
          <div className="compare">
            <a href="#">
              <span>Compare</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
