import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsRequest,
  useSelectProducts,
} from '../../../slices/web/productsSlice';
import { useRouter } from 'next/router';
import { TLanguageKeys } from '../../../type/language';
import Image from 'next/image';
import { useSelectProductGridView } from '../../../slices/web/globalSlice';
import Link from 'next/link';
import cn from 'classnames';

import styles from './styles.module.scss';

const ProductItems: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { locale: activeLocale } = router;

  const dispatch = useDispatch();
  const products = useSelector(useSelectProducts);
  const productGridView = useSelector(useSelectProductGridView);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <>
      {products?.map((product, index) => (
        <div
          key={index}
          className={cn('product-layout', {
            'product-grid col-md-4 col-xs-6': productGridView === 'grid',
            'product-list col-xs-12': productGridView === 'horizontal',
          })}
        >
          <div className="item">
            <div
              className={cn('product-thumb clearfix mb_30', {
                [styles.horizontalItem]: productGridView === 'horizontal',
              })}
            >
              <div className="image product-imageblock">
                <Link href={`/product/${product.id}`}>
                  {product.images[0] && product.images[0].url && (
                    <Image
                      src={product.images[0].url}
                      width={233}
                      height={57}
                      alt="main image"
                      className="img-responsive"
                    />
                  )}
                  {product.images[1] && product.images[1] && (
                    <Image
                      src={product.images[1].url}
                      width={233}
                      height={57}
                      alt="main image"
                      className="img-responsive"
                    />
                  )}
                </Link>
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
                    {product.translations[activeLocale as TLanguageKeys].name}
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(ProductItems);
