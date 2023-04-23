import CategoriesNavBar from '../../features/categoriesNavBar';
import { Banner } from '../../features/banner';
import { Footer } from '../../features/footer';
import { ReactElement } from 'react';
import MainLayout from '../../layout/web/mainLayout';
import IndexPage from '../index';
import ShopContainer from '../../features/shopContainer';

const Shop = () => {
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
