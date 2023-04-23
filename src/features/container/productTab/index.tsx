import Image from 'next/image';

export const ProductTab = (): JSX.Element => {
  return (
    <div id="product-tab" className="mt_10">
      <div className="heading-part mb_10 ">
        <h2 className="main_title">Featured Products</h2>
      </div>
      <ul className="nav text-right">
        <li className="active">
          <a
            href="https://html.lionode.com/darklook/#nArrivals"
            data-toggle="tab"
          >
            New Arrivals
          </a>
        </li>
        <li>
          <a
            href="https://html.lionode.com/darklook/#Bestsellers"
            data-toggle="tab"
          >
            Bestsellers
          </a>
        </li>
        <li>
          <a
            href="https://html.lionode.com/darklook/#Featured"
            data-toggle="tab"
          >
            Featured
          </a>
        </li>
      </ul>
      <div className="tab-content clearfix box">
        <div className="tab-pane active" id="nArrivals">
          <div className="nArrivals owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: 'translate3d(0px, 0px, 0px)',
                  transition: 'all 0s ease 0s',
                  width: '1785px',
                }}
              >
                <div className="owl-item active" style={{ width: '297.5px' }}>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <Image
                              src="/assets/images/product9.jpg"
                              alt="product9.jpg"
                              width={624}
                              height={800}
                            />
                            <Image
                              src="/assets/images/product9-1.jpg"
                              alt="main_banner1.jpg"
                              width={624}
                              height={800}
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: '297.5px' }}>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <Image
                              src="/assets/images/product9.jpg"
                              alt="product9.jpg"
                              width={624}
                              height={800}
                            />
                            <Image
                              src="/assets/images/product9-1.jpg"
                              alt="main_banner1.jpg"
                              width={624}
                              height={800}
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: '297.5px' }}>
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <Image
                              src="/assets/images/product9.jpg"
                              alt="product9.jpg"
                              width={624}
                              height={800}
                            />
                            <Image
                              src="/assets/images/product9-1.jpg"
                              alt="main_banner1.jpg"
                              width={624}
                              height={800}
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <div className="owl-prev disabled">prev</div>
              <div className="owl-next">next</div>
            </div>
            <div className="owl-dots">
              <div className="owl-dot active">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="Bestsellers">
          <div className="Bestsellers owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: 'translate3d(0px, 0px, 0px)',
                  transition: 'all 0s ease 0s',
                }}
              >
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product1-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product3.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product3-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product5.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product5-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product6.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product6-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product8.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product8-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product10.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product10-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <div className="owl-prev disabled">prev</div>
              <div className="owl-next">next</div>
            </div>
            <div className="owl-dots">
              <div className="owl-dot active">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="Featured">
          <div className="Featured owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: 'translate3d(0px, 0px, 0px)',
                  transition: 'all 0s ease 0s',
                }}
              >
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product2.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product2-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product4.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product4-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product6.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product6-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product8.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product8-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product10.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product10-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item">
                  <div className="product-grid">
                    <div className="item">
                      <div className="product-thumb  mb_30">
                        <div className="image product-imageblock">
                          <a href="https://html.lionode.com/darklook/product_detail_page.html">
                            <img
                              data-name="product_image"
                              src="./product2.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />{' '}
                            <img
                              src="./product2-1.jpg"
                              alt="iPod Classic"
                              title="iPod Classic"
                              className="img-responsive"
                            />
                          </a>
                          <div className="button-group text-center">
                            <div className="wishlist">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>wishlist</span>
                              </a>
                            </div>
                            <div className="quickview">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Quick View</span>
                              </a>
                            </div>
                            <div className="compare">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Compare</span>
                              </a>
                            </div>
                            <div className="add-to-cart">
                              <a href="https://html.lionode.com/darklook/#">
                                <span>Add to cart</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="caption product-detail text-center">
                          <div className="rating">
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
                            </span>
                          </div>
                          <h6 data-name="product_name" className="product-name">
                            <a
                              href="https://html.lionode.com/darklook/#"
                              title="Casual Shirt With Ruffle Hem"
                            >
                              New LCDScreen and HD Vide..
                            </a>
                          </h6>
                          <span className="price">
                            <span className="amount">
                              <span className="currencySymbol">$</span>70.00
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav">
              <div className="owl-prev disabled">prev</div>
              <div className="owl-next">next</div>
            </div>
            <div className="owl-dots">
              <div className="owl-dot active">
                <span />
              </div>
              <div className="owl-dot">
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
