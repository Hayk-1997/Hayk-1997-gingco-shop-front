import { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../formElements/input';
import { useDispatch, useSelector } from 'react-redux';
import {
  userLoginRequest,
  useSelectLoginError,
  useSelectLoginSuccess,
} from '../../../slices/web/authSlice';
import { TUserLogin } from '../../../type/web/auth';
import ErrorMessage from '../../../formElements/errorMessage';

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = (): JSX.Element => {
  const loginSuccess = useSelector(useSelectLoginSuccess);
  const loginError = useSelector(useSelectLoginError);

  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = useCallback((data: FormValues): void => {
    dispatch(userLoginRequest(data as TUserLogin));
  }, []);

  return (
    <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <Input
          control={control}
          name="email"
          rules={{ required: true }}
          type="text"
          placeholder="email"
        />
      </div>
      <div className="form-group">
        <Input
          control={control}
          name="password"
          rules={{ required: true }}
          type="password"
          placeholder="password"
        />
      </div>
      <div className="form-group text-center">
        {!loginSuccess && loginError && (
          <ErrorMessage message="Something went wrong!" />
        )}
      </div>
      <div className="form-group text-center">
        <input type="checkbox" name="remember" />
        <label htmlFor="remember"> Remember Me</label>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <button className="form-control btn btn-login">Log In</button>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default memo(LoginForm);
