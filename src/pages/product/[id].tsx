import { ReactElement } from 'react';
import Breadcrumb from '../../features/breadcrumb';
import CategoriesNavBar from '../../features/categoriesNavBar';
import ProductDetail from '../../features/productDetail';
import MainLayout from '../../layout/web/mainLayout';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});

const ProductSinglePage = (): JSX.Element => {
  return (
    <div className="container">
      <div className="row ">
        <Breadcrumb
          title="Shopping Cart"
          breadcrumbs={['Home', 'Shopping Cart']}
        />
        <CategoriesNavBar />
        <div className="col-sm-8 col-lg-9 mtb_20">
          <div className="row mt_10 ">
            <div className="col-md-6">
              <div>
                <a className="thumbnails">
                  {' '}
                  <img
                    data-name="product_image"
                    src="images/product/product1.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div
                id="product-thumbnail"
                className="owl-carousel owl-loaded owl-drag"
              >
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: 'translate3d(0px, 0px, 0px)',
                      transition: 'all 0s ease 0s',
                      width: '597px',
                    }}
                  >
                    <div
                      className="owl-item active"
                      style={{ width: '85.25px' }}
                    >
                      <div className="item">
                        <div className="image-additional">
                          <a
                            className="thumbnail"
                            href="images/product/product1.jpg"
                            data-fancybox="group1"
                          >
                            {' '}
                            <img src="images/product/product1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: '85.25px' }}
                    >
                      <div className="item">
                        <div className="image-additional">
                          <a
                            className="thumbnail"
                            href="images/product/product2.jpg"
                            data-fancybox="group1"
                          >
                            {' '}
                            <img src="images/product/product2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: '85.25px' }}
                    >
                      <div className="item">
                        <div className="image-additional">
                          <a
                            className="thumbnail"
                            href="images/product/product3.jpg"
                            data-fancybox="group1"
                          >
                            {' '}
                            <img src="images/product/product3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: '85.25px' }}
                    >
                      <div className="item">
                        <div className="image-additional">
                          <a
                            className="thumbnail"
                            href="images/product/product4.jpg"
                            data-fancybox="group1"
                          >
                            {' '}
                            <img src="images/product/product4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item active"
                      style={{ width: '85.25px' }}
                    >
                      <div className="item">
                        <div className="image-additional">
                          <a
                            className="thumbnail"
                            href="images/product/product5.jpg"
                            data-fancybox="group1"
                          >
                            {' '}
                            <img src="images/product/product5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: '85.25px' }}>
                      <div className="item">
                        <div className="image-additional">
                          <a
                            className="thumbnail"
                            href="images/product/product6.jpg"
                            data-fancybox="group1"
                          >
                            {' '}
                            <img src="images/product/product6.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: '85.25px' }}>
                      <div className="item">
                        <div className="image-additional">
                          <a
                            className="thumbnail"
                            href="images/product/product7.jpg"
                            data-fancybox="group1"
                          >
                            {' '}
                            <img src="images/product/product7.jpg" alt="" />
                          </a>
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
            <ProductDetail />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="exTab5" className="mtb_30">
                <ul className="nav nav-tabs">
                  <li className="active">
                    {' '}
                    <a href="#1c" data-toggle="tab">
                      Overview
                    </a>{' '}
                  </li>
                  <li>
                    <a href="#2c" data-toggle="tab">
                      Reviews (1)
                    </a>{' '}
                  </li>
                  <li>
                    <a href="#3c" data-toggle="tab">
                      Solution
                    </a>{' '}
                  </li>
                </ul>
                <div className="tab-content ">
                  <div className="tab-pane active pt_20" id="1c">
                    <p>
                      CLorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut lobortis malesuada mi id tristique. Sed ipsum nisi,
                      dapibus at faucibus non, dictum a diam. Nunc vitae
                      interdum diam. Sed finibus, justo vel maximus facilisis,
                      sapien turpis euismod tellus, vulputate semper diam ipsum
                      vel tellus.
                    </p>
                  </div>
                  <div className="tab-pane" id="2c">
                    <form className="form-horizontal">
                      <div id="review" />
                      <h4 className="mt_20 mb_30">Write a review</h4>
                      <div className="form-group required">
                        <div className="col-sm-12">
                          <label className="control-label" htmlFor="input-name">
                            Your Name
                          </label>
                          <input
                            name="name"
                            value="213"
                            id="input-name"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="col-sm-12">
                          <label
                            className="control-label"
                            htmlFor="input-review"
                          >
                            Your Review
                          </label>
                          <textarea
                            name="text"
                            rows={5}
                            id="input-review"
                            className="form-control"
                            defaultValue={''}
                          />
                          <div className="help-block">
                            <span className="text-danger">Note:</span> HTML is
                            not translated!
                          </div>
                        </div>
                      </div>
                      <div className="form-group required">
                        <div className="col-md-6">
                          <label className="control-label" htmlFor="rates">
                            Rating
                          </label>
                          <div className="rates" id="rates">
                            <span>Bad</span>
                            <input
                              name="rating"
                              defaultValue={1}
                              type="radio"
                            />
                            <input
                              name="rating"
                              defaultValue={2}
                              type="radio"
                            />
                            <input
                              name="rating"
                              defaultValue={3}
                              type="radio"
                            />
                            <input
                              name="rating"
                              defaultValue={4}
                              type="radio"
                            />
                            <input
                              name="rating"
                              defaultValue={5}
                              type="radio"
                            />
                            <span>Good</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="buttons pull-right">
                            <button
                              type="submit"
                              className="btn btn-md btn-link"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane pt_20" id="3c">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut lobortis malesuada mi id tristique. Sed ipsum nisi,
                      dapibus at faucibus non, dictum a diam. Nunc vitae
                      interdum diam. Sed finibus, justo vel maximus facilisis,
                      sapien turpis euismod tellus, vulputate semper diam ipsum
                      vel tellus.applied clearfix to the tab-content to rid of
                      the gap between the tab and the content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="heading-part text-center mb_10">
                <h2 className="main_title mt_50">Related Products</h2>
              </div>
              <div className="related_pro box">
                <div className="product-layout product-grid related-pro owl-carousel mb_50 owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transform: 'translate3d(0px, 0px, 0px)',
                        transition: 'all 0s ease 0s',
                        width: '1785px',
                      }}
                    >
                      <div
                        className="owl-item active"
                        style={{ width: '297.5px' }}
                      >
                        <div className="item">
                          <div className="product-thumb">
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
                              <h6
                                data-name="product_name"
                                className="product-name mt_20"
                              >
                                <a
                                  href="#"
                                  title="Casual Shirt With Ruffle Hem"
                                >
                                  New LCDScreen and HD Video Recording
                                </a>
                              </h6>
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
                              <span className="price">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>70.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: '297.5px' }}
                      >
                        <div className="item">
                          <div className="product-thumb">
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
                              <h6
                                data-name="product_name"
                                className="product-name mt_20"
                              >
                                <a
                                  href="#"
                                  title="Casual Shirt With Ruffle Hem"
                                >
                                  New LCDScreen and HD Video Recording
                                </a>
                              </h6>
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
                              <span className="price">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>70.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: '297.5px' }}
                      >
                        <div className="item">
                          <div className="product-thumb">
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
                              <h6
                                data-name="product_name"
                                className="product-name mt_20"
                              >
                                <a
                                  href="#"
                                  title="Casual Shirt With Ruffle Hem"
                                >
                                  New LCDScreen and HD Video Recording
                                </a>
                              </h6>
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
                              <span className="price">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>70.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: '297.5px' }}>
                        <div className="item">
                          <div className="product-thumb">
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
                              <h6
                                data-name="product_name"
                                className="product-name mt_20"
                              >
                                <a
                                  href="#"
                                  title="Casual Shirt With Ruffle Hem"
                                >
                                  New LCDScreen and HD Video Recording
                                </a>
                              </h6>
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
                              <span className="price">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>70.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: '297.5px' }}>
                        <div className="item">
                          <div className="product-thumb">
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
                              <h6
                                data-name="product_name"
                                className="product-name mt_20"
                              >
                                <a
                                  href="#"
                                  title="Casual Shirt With Ruffle Hem"
                                >
                                  New LCDScreen and HD Video Recording
                                </a>
                              </h6>
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
                              <span className="price">
                                <span className="amount">
                                  <span className="currencySymbol">$</span>70.00
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: '297.5px' }}>
                        <div className="item">
                          <div className="product-thumb">
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
                              <h6
                                data-name="product_name"
                                className="product-name mt_20"
                              >
                                <a
                                  href="#"
                                  title="Casual Shirt With Ruffle Hem"
                                >
                                  New LCDScreen and HD Video Recording
                                </a>
                              </h6>
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
        </div>
      </div>
      <div id="brand_carouse" className="ptb_30 text-center">
        <div className="type-01">
          <div className="heading-part mb_10 ">
            <h2 className="main_title">Brand Logo</h2>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="brand owl-carousel ptb_20 owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: 'translate3d(-1560px, 0px, 0px)',
                      transition: 'all 0.25s ease 0s',
                      width: '4095px',
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand4.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand5.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand6.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand7.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand8.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand9.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand1.png"
                            alt="Disney"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand2.png"
                            alt="Dell"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand3.png"
                            alt="Harley"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand4.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand5.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand6.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand7.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand8.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand9.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand1.png"
                            alt="Disney"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand2.png"
                            alt="Dell"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand3.png"
                            alt="Harley"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand4.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand5.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: '195px' }}>
                      <div className="item text-center">
                        {' '}
                        <a href="#">
                          <img
                            src="images/brand/brand6.png"
                            alt="Canon"
                            className="img-responsive"
                          />
                        </a>{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <div className="owl-prev">prev</div>
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
      </div>
    </div>
  );
};

ProductSinglePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Shop">{page}</MainLayout>;
};

export default ProductSinglePage;
