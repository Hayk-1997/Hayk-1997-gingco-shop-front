import CategoriesNavBar from '../../features/categoriesNavBar';
import { ReactElement } from 'react';
import MainLayout from '../../layout/web/mainLayout';
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
