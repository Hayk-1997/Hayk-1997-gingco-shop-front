import { ReactElement } from 'react';
import AdminLayout from '../../../layout/admin/adminLayout';

const LoginPage = (): JSX.Element => {
  return (
    <div className="login-box">
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout title="Login" className="login-page">
      {page}
    </AdminLayout>
  );
};
export default LoginPage;
