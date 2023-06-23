import React, { memo } from 'react';

export const ShoppingCart = (): JSX.Element => {
  return (
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
                      <i className="fa fa-times-circle" />
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
  );
};

export default memo(ShoppingCart);
