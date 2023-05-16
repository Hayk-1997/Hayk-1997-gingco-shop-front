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
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb clearfix mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product3.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product3-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb clearfix mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product4.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product4-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb clearfix mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product5.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product5-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb clearfix mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product6.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product6-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb clearfix mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product7.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product7-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb  mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product8.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product8-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb  mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product9.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product9-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb  mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product10.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product10-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb  mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product1-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb  mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product2.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product2-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb  mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product3.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product3-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-layout product-grid col-md-4 col-xs-6 ">
          <div className="item">
            <div className="product-thumb  mb_30">
              <div className="image product-imageblock">
                {' '}
                <a href="product_detail_page.html">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product4.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                  <img
                    src="images/product/product4-1.jpg"
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />{' '}
                </a>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="caption product-detail text-center">
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    New LCDScreen and HD Video Recording
                  </a>
                </h6>
                <div className="rating">
                  {' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-1x" />
                  </span>{' '}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x" />
                    <i className="fa fa-star fa-stack-x" />
                  </span>{' '}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20 mb_60">
                  {' '}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
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
