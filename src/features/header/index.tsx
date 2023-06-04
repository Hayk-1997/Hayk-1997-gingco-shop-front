import Image from 'next/image';
import { TopHeader } from './topHeader';
import { useState } from 'react';

export const Header = (): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <header id="header">
      <TopHeader />
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="main-search">
                <input
                  id="search-input"
                  value={value}
                  placeholder="Search"
                  className="form-control input-lg"
                  autoComplete="off"
                  type="text"
                  onChange={(e) => setValue(e.target.value)}
                />
                <span className="input-group-btn">
                  <button type="button" className="btn btn-default btn-lg">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </div>
            <div className="navbar-header col-xs-6 col-sm-4">
              <div className="navbar-brand">
                <Image
                  src="/assets/images/logo.png"
                  alt="image"
                  width={233}
                  height={57}
                />
              </div>
            </div>
            <div className="col-xs-6 col-sm-4 shopcart">
              <div id="cart" className="btn-group btn-block mtb_40">
                <button
                  type="button"
                  className="btn"
                  data-target="#cart-dropdown"
                  data-toggle="collapse"
                  aria-expanded="true"
                >
                  <span id="shippingcart">Shopping cart</span>
                  <span id="cart-total">items (0)</span>
                </button>
              </div>
              <div id="cart-dropdown" className="cart-menu collapse">
                <ul>
                  <li>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td className="text-left product-name">
                            <a href="https://html.lionode.com/darklook/#">
                              MacBook Pro
                            </a>
                            <span className="text-left price">$20.00</span>
                            <input
                              className="cart-qty"
                              name="product_quantity"
                              min="1"
                              value="1"
                              type="number"
                              onChange={(e) => console.log(e.target.value)}
                            />
                          </td>
                          <td className="text-center">
                            <a className="close-cart">
                              <i className="fa fa-times-circle" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <a href="https://html.lionode.com/darklook/#">
                              <img
                                src="./70x84.jpg"
                                alt="iPod Classic"
                                title="iPod Classic"
                              />
                            </a>
                          </td>
                          <td className="text-left product-name">
                            <a href="https://html.lionode.com/darklook/#">
                              MacBook Pro
                            </a>
                            <span className="text-left price">$20.00</span>
                            <input
                              className="cart-qty"
                              name="product_quantity"
                              min="1"
                              value="1"
                              type="number"
                              onChange={(e) => console.log(e.target.value)}
                            />
                          </td>
                          <td className="text-center">
                            <a className="close-cart">
                              <i className="fa fa-times-circle"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="text-right">
                            <strong>Sub-Total</strong>
                          </td>
                          <td className="text-right">$2,100.00</td>
                        </tr>
                        <tr>
                          <td className="text-right">
                            <strong>Eco Tax (-2.00)</strong>
                          </td>
                          <td className="text-right">$2.00</td>
                        </tr>
                        <tr>
                          <td className="text-right">
                            <strong>VAT (20%)</strong>
                          </td>
                          <td className="text-right">$20.00</td>
                        </tr>
                        <tr>
                          <td className="text-right">
                            <strong>Total</strong>
                          </td>
                          <td className="text-right">$2,122.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <form action="https://html.lionode.com/darklook/cart_page.html">
                      <input
                        className="btn pull-left mt_10"
                        value="View cart"
                        type="submit"
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </form>
                    <form action="https://html.lionode.com/darklook/checkout_page.html">
                      <input
                        className="btn pull-right mt_10"
                        value="Checkout"
                        type="submit"
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <nav className="navbar">
            <p>menu</p>
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target=".js-navbar-collapse"
            >
              <span className="i-bar">
                <i className="fa fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse js-navbar-collapse">
              <ul id="menu" className="nav navbar-nav">
                <li>
                  <a href="https://html.lionode.com/darklook/index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://html.lionode.com/darklook/index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://html.lionode.com/darklook/index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://html.lionode.com/darklook/index.html">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
