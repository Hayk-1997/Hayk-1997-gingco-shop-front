import Breadcrumb from '../../features/breadcrumb';
import CategoriesNavBar from '../../features/categoriesNavBar';
import ProductDetails from '../../features/products/details';
import { ReactElement, useEffect } from 'react';
import MainLayout from '../../layout/web/mainLayout';
import { getProductRequest } from '../../slices/web/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

export const getServerSideProps: GetServerSideProps<any> = async ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});

const ProductPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { id: productId }: ParsedUrlQuery = router.query;

  const { product = null, isGetProductSuccess, isGetProductFailure } = useSelector((store) => store.webProducts);

  useEffect(() => {
    if (productId) {
      dispatch(getProductRequest(Number(productId)));
    }
  }, [productId]);

  useEffect(() => {
    if (isGetProductFailure) {
      router.push('/404');
    }
  }, [isGetProductFailure]);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb
          title="Shopping Cart"
          breadcrumbs={['Home', 'Product Details']}
        />
        <CategoriesNavBar />
        { isGetProductSuccess && <ProductDetails product={product} lang={router.locale} />}
      </div>
    </div>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Shop">{page}</MainLayout>;
};

export default ProductPage;
