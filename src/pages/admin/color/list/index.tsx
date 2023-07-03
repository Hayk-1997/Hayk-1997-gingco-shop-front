import { lazy, ReactElement, Suspense, useEffect } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';
import {
  getColorsRequest,
  useSelectColors,
  deleteColorRequest,
} from '../../../../slices/admin/colorSlice';
import { useDispatch, useSelector } from 'react-redux';
import { colorsColumns } from '../../../../features/customTable/columnConstants';
import { useRouter } from 'next/router';

const CustomTable = lazy(
  () =>
    import(
      /* webpackChunkName: "custom-table" */ '../../../../features/customTable'
    )
);

const ColorList = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();

  const colors = useSelector(useSelectColors);

  useEffect(() => {
    dispatch(getColorsRequest());
  }, [dispatch]);

  const tableProps = {
    columns: colorsColumns,
    data: colors,
    actions: {
      onEdit: (id: number) => router.push(`edit/${id}`),
      onDelete: (id: number) => {
        dispatch(deleteColorRequest(id));
      },
    },
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Colors</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Colors List</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      <section className="content">
        <div className="card">
          <div className="card-body">
            <Suspense fallback={<div>Loading</div>}>
              <CustomTable tableProps={tableProps} />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};

ColorList.getLayout = function getLayout(page: ReactElement) {
  return <AuthorizedAdminLayout>{page}</AuthorizedAdminLayout>;
};

export default ColorList;
