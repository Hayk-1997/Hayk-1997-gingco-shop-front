import { lazy, Suspense, ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';
const RegisterForm = lazy(
  () => import(/* webpackChunkName: "login-form" */ './registerForm')
);
import AuthPagesLayout from '../../layout/web/authPagesLayout';

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});

const Register = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
};

Register.getLayout = function getLayout(page: ReactElement) {
  return <AuthPagesLayout title="Register">{page}</AuthPagesLayout>;
};

export default Register;
