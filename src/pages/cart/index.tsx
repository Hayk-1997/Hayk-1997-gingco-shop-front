// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import type { GetServerSideProps } from 'next';

import MainLayout from '../../layout/web/mainLayout';
import Breadcrumb from '../../features/breadcrumb';
import { ReactElement } from 'react';
// import IndexPage from '../index';

// export const getServerSideProps: GetServerSideProps<any> = async ({ locale}) => ({
//     props: {
//         ...(await serverSideTranslations(locale ?? 'en')),
//     },
// })

const Cart = (): JSX.Element => {
  // const { t } = useTranslation('common')

  return (
    <div className="container">
      <div className="row ">
        <Breadcrumb
          title="Shopping Cart"
          breadcrumbs={['Home', 'Shopping Cart']}
        />
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
              <ul className="nav  main-navigation collapse in">
                <li>
                  <a href="#">Appliances</a>
                </li>
                <li>
                  <a href="#">Mobile Phones</a>
                </li>
                <li>
                  <a href="#">Tablet PC &amp; Accessories</a>
                </li>
                <li>
                  <a href="#">Consumer Electronics</a>
                </li>
                <li>
                  <a href="#">Computers &amp; Networking</a>
                </li>
                <li>
                  <a href="#">Electrical &amp; Tools</a>
                </li>
                <li>
                  <a href="#">Apparel</a>
                </li>
                <li>
                  <a href="#">Bags &amp; Shoes</a>
                </li>
                <li>
                  <a href="#">Toys &amp; Hobbies</a>
                </li>
                <li>
                  <a href="#">Watches &amp; Jewelry</a>
                </li>
                <li>
                  <a href="#">Home &amp; Garden</a>
                </li>
                <li>
                  <a href="#">Health &amp; Beauty</a>
                </li>
                <li>
                  <a href="#">Outdoors &amp; Sports</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="left_banner left-sidebar-widget mb_50 mt_30">
            <a href="#">
              <img
                src="images/left1.jpg"
                alt="Left Banner"
                className="img-responsive"
              />
            </a>
          </div>
          {/*<div className="left-special left-sidebar-widget mb_50">
                                <div className="heading-part mb_20 ">
                                    <h2 className="main_title">Top Products</h2>
                                </div>
                                <div id="left-special" className="owl-carousel owl-loaded owl-drag">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage"
                                             style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: 907 }}>
                                            <div className="owl-item active" style={{ width: 226.656 }}>
                                                <ul className="row ">
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product1.jpg" />
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product1-1.jpg" />
                                                                    </a>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product2.jpg" />
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product2-1.jpg" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product3.jpg" />
                                                                            <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product3-1.jpg" />
                                                                            </a>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="owl-item active" style={{ width: 226.656 }}>
                                                <ul className="row ">
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product4.jpg" />
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product4-1.jpg" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product5.jpg" />
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product5-1.jpg" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product6.jpg" />
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product6-1.jpg" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="owl-item" style={{ width: 226.656 }}>
                                                <ul className="row ">
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product7.jpg" />
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product7-1.jpg" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product8.jpg" />
                                                                            <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product8-1.jpg" />
                                                                            </a>
                                                                        </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product9.jpg" />
                                                                            <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product9-1.jpg" />
                                                                            </a>
                                                                        </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="owl-item" style={{ width: 226.656 }}>
                                                <ul className="row ">
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product10.jpg" />
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product10-1.jpg" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html">
                                                                        <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product1.jpg" />
                                                                            <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product1-1.jpg" />
                                                                            </a>
                                                                        </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
                      </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="item product-layout-left mb_20">
                                                        <div className="product-list col-xs-4">
                                                            <div className="product-thumb">
                                                                <div className="image product-imageblock">
                                                                    <a
                                                                    href="product_detail_page.html"> <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product2.jpg" /> <img
                                                                    className="img-responsive" title="iPod Classic"
                                                                    alt="iPod Classic"
                                                                    src="images/product/product2-1.jpg" />
                                                                </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-8">
                                                            <div className="caption product-detail">
                                                                <h6 className="product-name"><a href="#">New LCDScreen
                                                                    and HD Video Recording</a></h6>
                                                                <div className="rating"><span className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-1x"></i></span> <span
                                                                    className="fa fa-stack"><i
                                                                    className="fa fa-star-o fa-stack-1x"></i><i
                                                                    className="fa fa-star fa-stack-x"></i></span></div>
                                                                <span className="price"><span className="amount"><span
                                                                    className="currencySymbol">$</span>70.00</span>
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
                                        <div className="owl-dot active"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                        <div className="owl-dot"><span></span></div>
                                    </div>
                                </div>
                            </div>*/}
        </div>
        <div className="col-sm-8 col-lg-9 mtb_20">
          <form encType="multipart/form-data" method="post" action="#">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Model</td>
                    <td className="text-left">Quantity</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <a href="#">
                        <img
                          src="images/product/70x84.jpg"
                          alt="iPod Classic"
                          title="iPod Classic"
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a href="product.html">iPhone</a>
                    </td>
                    <td className="text-left">product 11</td>
                    <td className="text-left">
                      <div
                        style={{ maxWidth: 200 }}
                        className="input-group btn-block"
                      >
                        <input
                          type="text"
                          className="form-control quantity"
                          size={1}
                          value="1"
                          name="quantity"
                          onChange={(event) => {
                            console.log(event);
                          }}
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn"
                            title=""
                            data-toggle="tooltip"
                            type="submit"
                            data-original-title="Update"
                          >
                            <i className="fa fa-refresh" />
                          </button>
                          <button
                            className="btn btn-danger"
                            title=""
                            data-toggle="tooltip"
                            type="button"
                            data-original-title="Remove"
                          >
                            <i className="fa fa-times-circle" />
                          </button>
                        </span>
                      </div>
                    </td>
                    <td className="text-right">$254.00</td>
                    <td className="text-right">$254.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
          <h3 className="mtb_10">What would you like to do next?</h3>
          <p>
            Choose other products too or change selected products count or click
            Checkout to make an order.
          </p>
          <div className="row">
            <div className="col-sm-4 col-sm-offset-8">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td className="text-right">
                      <strong>Sub-Total:</strong>
                    </td>
                    <td className="text-right">$210.00</td>
                  </tr>
                  <tr>
                    <td className="text-right">
                      <strong>Eco Tax (-2.00):</strong>
                    </td>
                    <td className="text-right">$2.00</td>
                  </tr>
                  <tr>
                    <td className="text-right">
                      <strong>VAT (20%):</strong>
                    </td>
                    <td className="text-right">$42.00</td>
                  </tr>
                  <tr>
                    <td className="text-right">
                      <strong>Total:</strong>
                    </td>
                    <td className="text-right">$254.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <form action="#">
            <input
              className="btn pull-left mt_30"
              type="submit"
              value="Continue Shopping"
            />
          </form>
          <form action="#">
            <input
              className="btn pull-right mt_30"
              type="submit"
              value="Checkout"
            />
          </form>
        </div>
      </div>
      {/*<div id="brand_carouse" className="ptb_30 text-center">
                        <div className="type-01">
                            <div className="heading-part mb_20 ">
                                <h2 className="main_title">Brand Logo</h2>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="brand owl-carousel ptb_20 owl-loaded owl-drag">


                                        <div className="owl-stage-outer">
                                            <div className="owl-stage"
                                                 style={{ transform: 'translate3d(-1080px, 0px, 0px)', transition: 'all 0s ease 0s', width: 3420 }}>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand5.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand6.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand7.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand8.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand9.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand1.png" alt="Disney"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item active" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand2.png" alt="Dell"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item active" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand3.png" alt="Harley"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item active" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand4.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item active" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand5.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand6.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand7.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand8.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand9.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand1.png" alt="Disney"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand2.png" alt="Dell"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand3.png" alt="Harley"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand4.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                                <div className="owl-item cloned" style={{ width: 180 }}>
                                                    <div className="item text-center"><a href="#"><img
                                                        src="images/brand/brand5.png" alt="Canon"
                                                        className="img-responsive" /></a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-nav">
                                            <div className="owl-prev">prev</div>
                                            <div className="owl-next">next</div>
                                        </div>
                                        <div className="owl-dots">
                                            <div className="owl-dot active"><span></span></div>
                                            <div className="owl-dot"><span></span></div>
                                            <div className="owl-dot"><span></span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>*/}
    </div>
  );
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Cart">{page}</MainLayout>;
};

export default Cart;
