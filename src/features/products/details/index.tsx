import React, { useCallback, useState } from 'react';
import { TProduct } from '../../../type/web/products';
import { TLanguageKeys } from '../../../type/language';
import Slider from '../../slider';
import ColorOption from '../../dropDown/colorOption';
import { useDispatch, useSelector } from 'react-redux';
import {
  setShopCart,
  useSelectShopCart,
} from '../../../slices/web/globalSlice';
import { TProductShopCart } from '../../../type/product';

import styles from './styles.module.scss';

interface TProductDetails {
  product: TProduct;
  lang: TLanguageKeys;
}

const ProductDetails: React.FC<TProductDetails> = ({
  product,
  lang,
}): JSX.Element => {
  const dispatch = useDispatch();
  const shopCartData = useSelector(useSelectShopCart);

  const [quantity, setQuantity] = useState<string>('1');
  const [color, setColor] = useState('');

  const addToShoppingCat = useCallback(() => {
    let filteredData;
    if (shopCartData) {
      const dataIds = shopCartData.map((item: TProductShopCart) => item.id);

      filteredData = shopCartData.reduce((acc: any, item: TProductShopCart) => {
        if (item.id === product.id) {
          return [
            {
              ...item,
              color,
              quantity,
            },
          ];
        } else {
          return [acc, item];
        }
      }, [] as TProductShopCart[]);
      if (!dataIds.includes(product.id)) {
        filteredData = [{ ...product, color, quantity }, ...shopCartData];
      }
    } else {
      filteredData = [{ ...product, color, quantity }];
    }

    dispatch(setShopCart(JSON.stringify(filteredData)));
  }, [color, dispatch, product, quantity, shopCartData]);

  return (
    <div className="col-sm-8 col-lg-9 mtb_20">
      <div className="row mt_10">
        <div className="col-md-6">
          <Slider images={product?.images} />
        </div>
        <div className="col-md-6 prodetail caption product-thumb">
          <h4 data-name="product_name" className="product-name">
            <a href="#" title="Casual Shirt With Ruffle Hem">
              {product?.translations?.[lang].title}
            </a>
          </h4>
          <div className="rating"></div>
          <span className="price mb_20">
            <span className="amount">֏‎{product.price}</span>
          </span>
          <hr />
          <p className="product-desc mtb_30">
            {product.translations[lang].description}
          </p>
          <div id="product">
            <div className="form-group">
              <div className="row">
                <div className="Color col-md-6">
                  <ColorOption setColor={setColor} selectedColor={color} />
                </div>
              </div>
            </div>
            <div className="qty mt_30 form-group2">
              <label htmlFor="quantity">Qty</label>
              <input
                id="quantity"
                name="product_quantity"
                min={1}
                value={quantity}
                type="number"
                onChange={(event) => setQuantity(event.target.value)}
              />
            </div>
            <div className="button-group mt_30">
              <button
                onClick={addToShoppingCat}
                className={styles.addToCartButton}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
