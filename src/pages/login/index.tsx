import { lazy, Suspense, ReactElement } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';
const LoginForm = lazy(
  () => import(/* webpackChunkName: "login-form" */ './loginForm'),
);
import AuthPagesLayout from '../../layout/web/authPagesLayout';

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});

const Login = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthPagesLayout title="Login">{page}</AuthPagesLayout>;
};

export default Login;
