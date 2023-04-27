import { ReactElement } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';

const CategoryList = (): JSX.Element => {
  return (
    <div className="content-wrapper" style={{ minHeight: '1302.12px' }}>
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
            <div
              id="jsGrid1"
              className="jsgrid"
              style={{ position: 'relative', height: '100%', width: '100%' }}
            >
              <div className="jsgrid-grid-header jsgrid-header-scrollbar">
                <table className="jsgrid-table">
                  <tbody>
                    <tr className="jsgrid-header-row">
                      <th
                        className="jsgrid-header-cell jsgrid-header-sortable"
                        style={{ width: 150 }}
                      >
                        Name Hy
                      </th>
                      <th
                        className="jsgrid-header-cell jsgrid-align-right jsgrid-header-sortable"
                        style={{ width: 50 }}
                      >
                        Name Ru
                      </th>
                      <th
                        className="jsgrid-header-cell jsgrid-header-sortable"
                        style={{ width: 200 }}
                      >
                        Name En
                      </th>
                    </tr>
                    <tr
                      className="jsgrid-filter-row"
                      style={{ display: 'none' }}
                    >
                      <td className="jsgrid-cell" style={{ width: 150 }}>
                        <input type="text" />
                      </td>
                      <td
                        className="jsgrid-cell jsgrid-align-right"
                        style={{ width: 50 }}
                      >
                        <input type="number" />
                      </td>
                      <td className="jsgrid-cell" style={{ width: 200 }}>
                        <input type="text" />
                      </td>
                      <td
                        className="jsgrid-cell jsgrid-align-center"
                        style={{ width: 100 }}
                      >
                        <select>
                          <option value={0} />
                          <option value={1}>United States</option>
                          <option value={2}>Canada</option>
                          <option value={3}>United Kingdom</option>
                          <option value={4}>France</option>
                          <option value={5}>Brazil</option>
                          <option value={6}>China</option>
                          <option value={7}>Russia</option>
                        </select>
                      </td>
                      <td
                        className="jsgrid-cell jsgrid-align-center"
                        style={{ width: 100 }}
                      >
                        <input type="checkbox" />
                      </td>
                    </tr>
                    <tr
                      className="jsgrid-insert-row"
                      style={{ display: 'none' }}
                    >
                      <td className="jsgrid-cell" style={{ width: 150 }}>
                        <input type="text" />
                      </td>
                      <td
                        className="jsgrid-cell jsgrid-align-right"
                        style={{ width: 50 }}
                      >
                        <input type="number" />
                      </td>
                      <td className="jsgrid-cell" style={{ width: 200 }}>
                        <input type="text" />
                      </td>
                      <td
                        className="jsgrid-cell jsgrid-align-center"
                        style={{ width: 100 }}
                      >
                        <select>
                          <option value={0} />
                          <option value={1}>United States</option>
                          <option value={2}>Canada</option>
                          <option value={3}>United Kingdom</option>
                          <option value={4}>France</option>
                          <option value={5}>Brazil</option>
                          <option value={6}>China</option>
                          <option value={7}>Russia</option>
                        </select>
                      </td>
                      <td
                        className="jsgrid-cell jsgrid-align-center"
                        style={{ width: 100 }}
                      >
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="jsgrid-grid-body" style={{ height: 821 }}>
                <table className="jsgrid-table">
                  <tbody>
                    <tr className="jsgrid-row">
                      <td className="jsgrid-cell" style={{ width: 150 }}>
                        Otto Clay
                      </td>
                      <td
                        className="jsgrid-cell jsgrid-align-right"
                        style={{ width: 50 }}
                      >
                        61
                      </td>
                      <td className="jsgrid-cell" style={{ width: 200 }}>
                        Ap #897-1459 Quam Avenue
                      </td>
                      <td
                        className="jsgrid-cell jsgrid-align-center"
                        style={{ width: 50 }}
                      >
                        <input type="checkbox" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="jsgrid-pager-container">
                <div className="jsgrid-pager">
                  Pages:{' '}
                  <span className="jsgrid-pager-nav-button jsgrid-pager-nav-inactive-button">
                    <a href="javascript:void(0);">First</a>
                  </span>{' '}
                  <span className="jsgrid-pager-nav-button jsgrid-pager-nav-inactive-button">
                    <a href="javascript:void(0);">Prev</a>
                  </span>{' '}
                  <span className="jsgrid-pager-page jsgrid-pager-current-page">
                    1
                  </span>
                  <span className="jsgrid-pager-page">
                    <a href="javascript:void(0);">2</a>
                  </span>
                  <span className="jsgrid-pager-page">
                    <a href="javascript:void(0);">3</a>
                  </span>
                  <span className="jsgrid-pager-page">
                    <a href="javascript:void(0);">4</a>
                  </span>
                  <span className="jsgrid-pager-page">
                    <a href="javascript:void(0);">5</a>
                  </span>{' '}
                  <span className="jsgrid-pager-nav-button">
                    <a href="javascript:void(0);">Next</a>
                  </span>{' '}
                  <span className="jsgrid-pager-nav-button">
                    <a href="javascript:void(0);">Last</a>
                  </span>{' '}
                  &nbsp;&nbsp; 1 of 5{' '}
                </div>
              </div>
              <div
                className="jsgrid-load-shader"
                style={{
                  display: 'none',
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1000,
                }}
              />
              <div
                className="jsgrid-load-panel"
                style={{
                  display: 'none',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  zIndex: 1000,
                }}
              >
                Please, wait...
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

CategoryList.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthorizedAdminLayout className={'asd'}>{page}</AuthorizedAdminLayout>
  );
};

export default CategoryList;
