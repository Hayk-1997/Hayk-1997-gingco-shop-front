import { ReactElement } from 'react';
import AuthorizedAdminLayout from '../../../../layout/admin/authorizedAdminLayout';

const CreateCategory = (): JSX.Element => {
  return (
    <div className="content-wrapper" style={{ minHeight: '1302.12px' }}>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Create</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Create Category</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-primary">
                <form>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="nameHy">Name Hy</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nameHy"
                            placeholder="Name Hy"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="nameRu">Name Ru</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nameRu"
                            placeholder="Name Ru"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="nameHy">Name En</label>
                          <input
                            type="text"
                            className="form-control"
                            id="nameEn"
                            placeholder="Name En"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

CreateCategory.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthorizedAdminLayout className={'asd'}>{page}</AuthorizedAdminLayout>
  );
};

export default CreateCategory;
