import React, { memo, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleterCartProductQuantity,
  getCartProducts,
  updateCartProductQuantity,
  useSelectCartProducts,
} from '../../../slices/web/globalSlice';
import { TLanguageKeys } from '../../../type/language';
import { useRouter } from 'next/router';
// import { TProductShopCart } from '../../../type/product';
import cn from 'classnames';

import styles from './styles.module.scss';

export const ShoppingCart = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { locale: activeLocale } = router;
  const cartProducts = useSelector(useSelectCartProducts);

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  // const [data, setData] = useState<TProductShopCart[]>([])
  // useEffect(() => {
  //   setData(shopCartData || []);
  // }, [shopCartData]);
  // const removeCart = useCallback(
  //   (id: number) => {
  //     const filteredData = shopCartData?.filter((item) => item.id !== id);
  //     dispatch(setShopCart(JSON.stringify(filteredData)));
  //   },
  //   [dispatch, shopCartData]
  // );

  const deleteItemFromCart = (id: number) => {
    dispatch(deleterCartProductQuantity({ id }));
  };

  const updateProductQuantity = (id: number, e: any) => {
    dispatch(updateCartProductQuantity({ id, quantity: +e.target.value }));
  };

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
          <span id="cart-total">items ({cartProducts?.length || 0})</span>
        </button>
      </div>
      <div id="cart-dropdown" className="cart-menu collapse">
        <ul>
          {cartProducts?.length ? (
            cartProducts.map((item, index: number) => (
              <li key={index}>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td className="text-center">
                        <a href="https://html.lionode.com/darklook/#">
                          <Image
                            src={item.product.images?.[0]?.url}
                            alt="image"
                            width={70}
                            height={84}
                          />
                        </a>
                      </td>
                      <td className="text-left product-name">
                        <a
                          href="#"
                          onClick={() =>
                            router.push(`/product/${item.product.id}`)
                          }
                        >
                          {
                            item.product.translations[
                              activeLocale as TLanguageKeys
                            ].name
                          }
                        </a>
                        <span className="text-left price">
                          {item.product.price}
                        </span>
                        <input
                          className="cart-qty"
                          name="product_quantity"
                          min="1"
                          defaultValue={item.quantity}
                          type="number"
                          onChange={(e) => updateProductQuantity(item.id, e)}
                        />
                      </td>
                      <td className="text-center">
                        <a
                          role="presentation"
                          className="close-cart"
                          onClick={() => deleteItemFromCart(item.id)}
                        >
                          x
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            ))
          ) : (
            <h5>Cart is empty</h5>
          )}

          <li>
            <input
              className={cn('btn pull-left mt_10', styles.buttons)}
              value="View cart"
              type="button"
              onClick={() => {
                router.push('/cart');
              }}
            />
            <input
              className={cn('btn pull-right mt_10', styles.buttons)}
              value="Checkout"
              type="submit"
              disabled={!cartProducts?.length}
              onChange={(e) => console.log(e.target.value)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(ShoppingCart);
