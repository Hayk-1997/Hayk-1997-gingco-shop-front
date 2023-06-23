import ProductItems from './productItems';
import Filtering from './filtering';
import { Pagination } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import useChangeRouter from '../../hooks/useChangeRouter';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  getShopProductRequest,
  useSelectShopProducts,
} from '../../slices/web/shopSlice';
import { splitPageURLWithSplitter } from '../../helpers/query';

const ShopContainer = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query } = router;

  const products = useSelector(useSelectShopProducts);
  const { changeRouter } = useChangeRouter();

  useEffect(() => {
    dispatch(
      getShopProductRequest(
        splitPageURLWithSplitter(router.asPath, router.pathname)
      )
    );
  }, [dispatch, router.asPath, router.pathname]);

  const handleChange = useCallback(
    (value: string, key: string) => {
      changeRouter([value] as string[], key);
    },
    [changeRouter]
  );

  return (
    <div className="col-sm-8 col-lg-9 mtb_20">
      <Filtering />
      <div className="row">
        <ProductItems products={products.products} />
      </div>
      <div className="pagination-nav text-center mt_50">
        {!!products.products.length && (
          <Pagination
            css={{
              '.nextui-pagination-highlight': {
                display: 'none',
              },
              '.nextui-pagination-item-animated': {
                borderRadius: '0',
              },
              '.nextui-pagination-item-active': {
                span: {
                  color: '#f74352',
                },
              },
            }}
            page={Number(query.page)}
            total={products.count}
            size="xl"
            onChange={(value) => handleChange(String(value), 'page')}
          />
        )}
      </div>
    </div>
  );
};

export default ShopContainer;
