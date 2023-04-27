import { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  adminLoginRequest,
  clearAdminLoginRequestStatus,
  useSelectAdminLoginError,
  useSelectAdminLoginSuccess,
} from '../../../slices/admin/authSlice';
import { useForm } from 'react-hook-form';
import { TUserLogin } from '../../../type/web/auth';
import Input from '../../../formElements/input';
import { useRouter } from 'next/router';
import LoginPageLayout from '../../../layout/admin/loginPageLayout';

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loginSuccess = useSelector(useSelectAdminLoginSuccess);
  const loginError = useSelector(useSelectAdminLoginError);

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (loginSuccess && !loginError) {
      router.push('category/create');
    }
  }, [loginSuccess, loginError, router]);

  useEffect(() => {
    return () => {
      dispatch(clearAdminLoginRequestStatus());
    };
  }, [dispatch]);

  const onSubmit = useCallback(
    (data: FormValues): void => {
      dispatch(adminLoginRequest(data as TUserLogin));
    },
    [dispatch, control]
  );

  return (
    <div className="login-box">
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group mb-3">
              <Input
                control={control}
                name="email"
                rules={{ required: true }}
                type="text"
                placeholder="email"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <Input
                control={control}
                name="password"
                rules={{ required: true }}
                type="password"
                placeholder="password"
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <button className="btn btn-primary btn-block">Sign In</button>
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
    <LoginPageLayout title="Login" className="login-page">
      {page}
    </LoginPageLayout>
  );
};
export default LoginPage;
