import React, { memo, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  setShopCart,
  useSelectShopCart,
} from '../../../slices/web/globalSlice';
import { TLanguageKeys } from '../../../type/language';
import { useRouter } from 'next/router';
import { TProductShopCart } from '../../../type/product';
import ShoppingCartIcon from '../../../icons/ShoppingCartIcon';
import cn from 'classnames';

import styles from './styles.module.scss';

export const ShoppingCart = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { locale: activeLocale } = router;
  const shopCartData = useSelector(useSelectShopCart);

  const [data, setData] = useState<TProductShopCart[]>([]);

  useEffect(() => {
    setData(shopCartData || []);
  }, [shopCartData]);

  const removeCart = useCallback(
    (id: number) => {
      const filteredData = shopCartData?.filter((item) => item.id !== id);
      dispatch(setShopCart(JSON.stringify(filteredData)));
    },
    [dispatch, shopCartData]
  );

  return (
    <div className="col-xs-6 col-sm-4 shopcart">
      <div
        id="cart"
        className={cn('btn-group btn-block mtb_40', styles.dropDown)}
      >
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
        <div className={styles.icon}>
          <ShoppingCartIcon />
        </div>
      </div>
      <div id="cart-dropdown" className="cart-menu collapse">
        <ul>
          {data.map((cart, index: number) => (
            <li key={index}>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td className="text-center">
                      <a href="https://html.lionode.com/darklook/#">
                        <Image
                          src={cart.images[0].url}
                          alt="image"
                          width={70}
                          height={84}
                        />
                      </a>
                    </td>
                    <td className="text-left product-name">
                      <a href="https://html.lionode.com/darklook/#">
                        {cart.translations[activeLocale as TLanguageKeys].name}
                      </a>
                      <span className="text-left price">{cart.price}</span>
                      <input
                        className="cart-qty"
                        name="product_quantity"
                        min="1"
                        value={cart.quantity}
                        type="number"
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </td>
                    <td className="text-center">
                      <a
                        role="presentation"
                        className="close-cart"
                        onClick={() => removeCart(cart.id)}
                      >
                        <i className="fa fa-times-circle" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </li>
          ))}

          <li>
            <input
              className={cn('btn pull-left mt_10', styles.buttons)}
              value="View cart"
              type="submit"
              onChange={(e) => console.log(e.target.value)}
            />
            <input
              className={cn('btn pull-right mt_10', styles.buttons)}
              value="Checkout"
              type="submit"
              onChange={(e) => console.log(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(ShoppingCart);
