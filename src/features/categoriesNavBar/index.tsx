import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategoriesRequest } from '../../slices/web/categorySlice';
const PriceFilters = lazy(
  () => import(/* webpackChunkName: "price-filters" */ '../priceFilters')
);

import CategoryItems from './categoryItems';

const CategoriesNavBar = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  return (
    <div id="column-left" className="col-sm-4 col-lg-3 hidden-xs">
      <div
        id="category-menu"
        className="navbar collapse in mb_40"
        aria-expanded="true"
        role="button"
      >
        <div className="nav-responsive">
          <div className="heading-part">
            <h2 className="main_title">Top category</h2>
          </div>
          <CategoryItems />
        </div>
      </div>
      <Suspense fallback={<>...Loading</>}>
        <PriceFilters />
      </Suspense>
      {/* TODO: Can be used for example as special product */}
      {/*<div className="left_banner left-sidebar-widget mt_30 mb_40">
        {' '}
        <a href="#">
          <img
            src="images/left1.jpg"
            alt="Left Banner"
            className="img-responsive"
          />
        </a>{' '}
      </div>*/}
      <div className="left-special left-sidebar-widget mb_50">
        {/* TODO: Move separate component as <TopProducts /> */}
        {/*<div className="heading-part mb_10 ">
          <h2 className="main_title">Top Products</h2>
        </div>
        <div id="left-special" className="owl-carousel owl-loaded owl-drag">
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: 'translate3d(0px, 0px, 0px)',
                transition: 'all 0s ease 0s',
                width: '1110px',
              }}
            >
              <div className="owl-item active" style={{ width: '277.5px' }}>
                <ul className="row ">
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product3.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product3-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product4.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product4-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product5.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product5-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                </ul>
              </div>
              <div className="owl-item" style={{ width: '277.5px' }}>
                <ul className="row ">
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product6.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product6-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product7.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product7-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product8.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product8-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                </ul>
              </div>
              <div className="owl-item" style={{ width: '277.5px' }}>
                <ul className="row ">
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product9.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product9-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product10.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product10-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product1.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product1-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                </ul>
              </div>
              <div className="owl-item" style={{ width: '277.5px' }}>
                <ul className="row ">
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product2.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product2-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product3.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product3-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                  <li className="item product-layout-left mb_20">
                    <div className="product-list col-xs-4">
                      <div className="product-thumb">
                        <div className="image product-imageblock">
                          {' '}
                          <a href="product_detail_page.html">
                            {' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product4.jpg"
                            />{' '}
                            <img
                              className="img-responsive"
                              title="iPod Classic"
                              alt="iPod Classic"
                              src="images/product/product4-1.jpg"
                            />{' '}
                          </a>{' '}
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-8">
                      <div className="caption product-detail">
                        <h6 className="product-name">
                          <a href="#">New LCDScreen and HD Video Recording</a>
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
                  </li>
                </ul>
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
            <div className="owl-dot">
              <span />
            </div>
            <div className="owl-dot">
              <span />
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default CategoriesNavBar;
