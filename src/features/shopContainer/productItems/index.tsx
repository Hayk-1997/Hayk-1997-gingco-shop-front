import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsRequest,
  useSelectProducts,
} from '../../../slices/web/productsSlice';
import { useRouter } from 'next/router';
import { TLanguageKeys } from '../../../type/language';
import Image from 'next/image';

const ProductItems: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { locale: activeLocale } = router;

  const dispatch = useDispatch();
  const products = useSelector(useSelectProducts);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <>
      {products?.map((product, index) => (
        <div
          key={index}
          className="product-layout product-grid col-md-4 col-xs-6 "
        >
          <div className="item">
            <div className="product-thumb clearfix mb_30">
              <div className="image product-imageblock">
                <a href="product_detail_page.html">
                  <Image
                    src={product.images.length ? product.images[0].url : ''}
                    width={233}
                    height={57}
                    alt="main image"
                    className="img-responsive"
                  />
                  <Image
                    src={product.images.length ? product.images[1].url : ''}
                    width={233}
                    height={57}
                    alt="main image"
                    className="img-responsive"
                  />
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
                <h6 data-name="product_name" className="product-name mt_20">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    {product.translations[activeLocale as TLanguageKeys].name}
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
                <p className="product-desc mt_20 mb_60">
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classic lets you enjoy up
                  to 40,000 songs or up to 200 hours of video or any combination
                  wherever you go.Cover Flow. Browse through your music
                  collection by flipping..
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(ProductItems);
