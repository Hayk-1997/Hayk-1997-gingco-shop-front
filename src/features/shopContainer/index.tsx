import ProductItems from './productItems';
import Filtering from './filtering';
import { Pagination } from '@nextui-org/react';
import { useSelector } from 'react-redux';
import { useSelectProducts } from '../../slices/web/productsSlice';
import useChangeRouter from '../../hooks/useChangeRouter';
import { useCallback } from 'react';
import { useRouter } from 'next/router';

const ShopContainer = (): JSX.Element => {
  const router = useRouter();
  const products = useSelector(useSelectProducts);
  const { changeRouter } = useChangeRouter();
  const { query } = router;

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
        <ProductItems />
      </div>
      <div className="pagination-nav text-center mt_50">
        {products.length && (
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
            total={products.length}
            size="xl"
            onChange={(value) => handleChange(String(value), 'page')}
          />
        )}
      </div>
    </div>
  );
};

export default ShopContainer;
