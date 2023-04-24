import { memo, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import Input from '../../../formElements/input';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  userRegisterRequest,
  useSelectRegisterError,
  useSelectRegisterSuccess,
} from '../../../slices/web/authSlice';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  phone: string;
  password: string;
};

const RegisterForm = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const registerSuccess = useSelector(useSelectRegisterSuccess);
  const registerError = useSelector(useSelectRegisterError);

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobilePhone: '',
      phone: '',
      password: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (registerSuccess && !registerError) {
      router.push('login');
    }
  }, [registerSuccess, registerError]);

  const onSubmit = useCallback((data: FormValues) => {
    dispatch(userRegisterRequest(data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <Input
          control={control}
          name="firstName"
          rules={{ required: true }}
          type="text"
          placeholder="firstName"
        />
      </div>
      <div className="form-group">
        <Input
          control={control}
          name="lastName"
          rules={{ required: true }}
          type="text"
          placeholder="lastName"
        />
      </div>
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
          name="mobilePhone"
          rules={{ required: true }}
          type="text"
          placeholder="mobilePhone"
        />
      </div>
      <div className="form-group">
        <Input
          control={control}
          name="phone"
          rules={{ required: true }}
          type="text"
          placeholder="phone"
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
      <div className="form-group">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <button className="form-control btn btn-login">Register Now</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default memo(RegisterForm);
