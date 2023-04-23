import { memo } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../formElements/input';

type FormValues = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <Input
          control={control}
          name="username"
          rules={{ required: true }}
          type="text"
          placeholder="username"
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
        <input type="checkbox" tabIndex={3} name="remember" id="remember" />
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
              <a href="#" tabIndex={5} className="forgot-password">
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
