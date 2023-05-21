import { useDispatch, useSelector } from 'react-redux';
import { ReactElement, useEffect } from 'react';
import { deleteCategory } from '../../../../slices/admin/categorySlice';
import { productsColumns } from '../../../../features/admin/product/adminCustomColumns';
import { useRouter } from 'next/router';
import { CustomTable } from '../../../../features/customTable';
import {
  getProductsRequest,
  useSelectProducts,
} from '../../../../slices/admin/productSlice';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';

const ProductsList = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const products = useSelector(useSelectProducts);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  const tableProps = {
    columns: productsColumns,
    data: products,
    actions: {
      onEdit: (id: number) => router.push(`edit/${id}`),
      onDelete: (id: number) => {
        dispatch(deleteCategory(id));
      },
    },
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Products</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Products List</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      <section className="content">
        <div className="card">
          <div className="card-body">
            <CustomTable tableProps={tableProps} />
          </div>
        </div>
      </section>
    </div>
  );
};

ProductsList.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};
export default ProductsList;
