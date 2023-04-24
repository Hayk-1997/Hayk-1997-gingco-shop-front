import CategoriesNavBar from '../../features/categoriesNavBar';
import { ReactElement } from 'react';
import MainLayout from '../../layout/web/mainLayout';
import ShopContainer from '../../features/shopContainer';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});

const Shop = (): JSX.Element => {
  return (
    <div>
      <div className="container">
        <CategoriesNavBar />
        <ShopContainer />
      </div>
    </div>
  );
};

Shop.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Shop">{page}</MainLayout>;
};

export default Shop;
