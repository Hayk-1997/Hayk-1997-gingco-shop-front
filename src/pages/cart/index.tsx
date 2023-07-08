// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import type { GetServerSideProps } from 'next';

import MainLayout from '../../layout/web/mainLayout';
import Breadcrumb from '../../features/breadcrumb';
import React, { ReactElement, useEffect, useMemo } from 'react';
import {
  getCartProducts,
  updateCartProductQuantity,
  useSelectIsUpdatingCartProduct,
  deleterCartProductQuantity,
} from '../../slices/web/globalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useSelectCartProducts } from '../../slices/web/globalSlice';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { TLanguageKeys } from '../../type/language';
import CategoriesNavBar from '../../features/categoriesNavBar';
import cn from 'classnames';
import styles from '../../features/dropDown/shoppingCart/styles.module.scss';

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});

const Cart = () => {
  // const { t } = useTranslation('common')
  const router = useRouter();
  const dispatch = useDispatch();
  const cartProducts = useSelector(useSelectCartProducts);
  const isUpdatingCartProduct = useSelector(useSelectIsUpdatingCartProduct);

  const lang = router.locale as TLanguageKeys;

  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  const deleteItemFromCart = (id: number) => {
    dispatch(deleterCartProductQuantity({ id }));
  };

  const updateProductQuantity = (id: number, e: any) => {
    dispatch(updateCartProductQuantity({ id, quantity: +e.target.value }));
  };

  const calcTotal = useMemo(() => {
    let total = 0;
    cartProducts.forEach((p) => {
      total += p.quantity * p.product.price;
    });

    return total;
  }, [cartProducts]);

  return (
    <div className="container">
      <div className="row ">
        <Breadcrumb
          title="Shopping Cart"
          breadcrumbs={['Home', 'Shopping Cart']}
        />
        <CategoriesNavBar />
        <div className="col-sm-8 col-lg-9 mtb_20">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td className="text-center">Image</td>
                  <td className="text-left">Product Name</td>
                  <td className="text-left">Color</td>
                  <td className="text-left">Quantity</td>
                  <td className="text-right">Unit Price</td>
                  <td className="text-right">Total</td>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <a href="#">
                        <img
                          src={item.product.images?.[0]?.url}
                          alt="iPod Classic"
                          title="iPod Classic"
                        />
                      </a>
                    </td>
                    <td className="text-left">
                      <a href="#">{item.product.translations[lang].name}</a>
                    </td>
                    <td className="text-left">
                      <div
                        style={{
                          height: 30,
                          width: 30,
                          backgroundColor: item.color.code,
                        }}
                      />
                    </td>
                    <td className="text-left">
                      <div
                        style={{ maxWidth: 200 }}
                        className="input-group btn-block"
                      >
                        <input
                          type="number"
                          className="form-control quantity"
                          size={1}
                          min={1}
                          defaultValue={item.quantity}
                          name="quantity"
                          disabled={isUpdatingCartProduct}
                          onChange={(e) => updateProductQuantity(item.id, e)}
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-danger"
                            title=""
                            data-toggle="tooltip"
                            type="button"
                            disabled={isUpdatingCartProduct}
                            data-original-title="Remove"
                            onClick={() => deleteItemFromCart(item.id)}
                          >
                            X
                          </button>
                        </span>
                      </div>
                    </td>
                    <td className="text-right">֏‎{item.product.price}</td>
                    <td className="text-right">
                      ֏‎{item.product.price * item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {cartProducts?.length ? (
            <>
              <h3 className="mtb_10">What would you like to do next?</h3>
              <p>
                Choose other products too or change selected products count or
                click Checkout to make an order.
              </p>
              <div className="row">
                <div className="col-sm-4 col-sm-offset-8">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td className="text-right">
                          <strong>Total:</strong>
                        </td>
                        <td className="text-right">֏‎{calcTotal}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <h4>Cart is empty</h4>
          )}
          <input
            className={cn('btn pull-left mt_30', styles.buttons)}
            type="button"
            value="Continue Shopping"
            onClick={() => router.push('/shop')}
          />
          <input
            className={cn('btn pull-right mt_30', styles.buttons)}
            type="button"
            value="Checkout"
            disabled={!cartProducts?.length}
            onClick={() => {
              console.log('Route to checkout page');
            }}
          />
        </div>
      </div>
    </div>
  );
};

Cart.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Cart">{page}</MainLayout>;
};

export default Cart;
