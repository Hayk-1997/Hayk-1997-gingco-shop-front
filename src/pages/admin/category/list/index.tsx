import { ReactElement, useEffect } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import {
  getCategories,
  useSelectCategories,
} from '../../../../slices/admin/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { CustomTable } from '../../../../features/customTable';
import { categoriesColumns } from '../../../../features/customTable/columnConstants';

const CategoryList = (): JSX.Element => {
  const dispatch = useDispatch();

  const categories = useSelector(useSelectCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const tableProps = {
    columns: categoriesColumns,
    data: categories,
    actions: {
      onEdit: (id: number) => {
        console.log('edit', id)
      },
      onDelete: (id: number) => {
        console.log('delete', id)
      },
    }
  }

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Categories</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">jsGrid</li>
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

CategoryList.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};

export default CategoryList;
