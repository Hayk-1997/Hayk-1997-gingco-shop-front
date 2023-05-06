import Breadcrumb from '../../features/breadcrumb';
import CategoriesNavBar from '../../features/categoriesNavBar';
import ProductDetails from '../../features/products/details';
import { ReactElement, useEffect } from 'react';
import MainLayout from '../../layout/web/mainLayout';
import {
  getProductRequest,
  useSelectGetProductFailure,
  useSelectGetProductSuccess,
  useSelectProduct,
} from '../../slices/web/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TLanguageKeys } from '../../type/language';

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
  params,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
    params,
  },
});

//@TODO put compatible types and change data getting logic to server side
const ProductPage = (props: any): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const product = useSelector(useSelectProduct);
  const isGetProductSuccess = useSelector(useSelectGetProductSuccess);
  const isGetProductFailure = useSelector(useSelectGetProductFailure);

  useEffect(() => {
    props.params.id && dispatch(getProductRequest(Number(props.params.id)));
  }, [dispatch, props.params.id]);

  useEffect(() => {
    if (isGetProductFailure) {
      router.push('/404');
    }
  }, [isGetProductFailure, router]);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb
          title="Shopping Cart"
          breadcrumbs={['Home', 'Product Details']}
        />
        <CategoriesNavBar />
        {isGetProductSuccess && (
          <ProductDetails
            product={product}
            lang={router.locale as TLanguageKeys}
          />
        )}
      </div>
    </div>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Shop">{page}</MainLayout>;
};

export default ProductPage;
