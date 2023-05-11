import React from 'react';
import { TProduct } from '../../../type/web/products';
import Image from 'next/image';
import { useMainEntityImage } from '../../../hooks/web/useMainEntityImage';
import { TLanguageKeys } from '../../../type/language';
import Thumbnail from '../thumbnail';

interface TProductDetails {
  product: TProduct;
  lang: TLanguageKeys;
}

//@TODO need to separate this component
const ProductDetails: React.FC<TProductDetails> = ({
  product,
  lang,
}): JSX.Element => {
  const getMainPhoto = useMainEntityImage(product.images);

  return (
    <div className="col-sm-8 col-lg-9 mtb_20">
      <div className="row mt_10">
        <div className="col-md-6">
          <div>
            <a className="thumbnails">
              <Image
                src={getMainPhoto}
                alt="main_banner"
                width={1903}
                height={650}
                data-name="product_image"
              />
            </a>
          </div>
          {product?.images && <Thumbnail images={product.images} />}
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
                  <label htmlFor="select-by-color">Color</label>
                  <select
                    name="product_color"
                    id="select-by-color"
                    className="selectpicker form-control"
                  >
                    <option>Blue</option>
                    <option>Green</option>
                    <option>Orange</option>
                    <option>White</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="qty mt_30 form-group2">
              <label htmlFor="quantity">Qty</label>
              <input
                id="quantity"
                name="product_quantity"
                min={1}
                defaultValue={1}
                type="number"
              />
            </div>
            <div className="button-group mt_30">
              <button>Add to cart</button>
              <div className="wishlist">
                <a href="#">
                  <span>wishlist</span>
                </a>
              </div>
              <div className="compare">
                <a href="#">
                  <span>Compare</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
