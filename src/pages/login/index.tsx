import {
  lazy,
  Suspense,
  useState,
  createElement,
  useRef,
  useCallback,
  ReactElement,
} from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetServerSideProps } from 'next';
const LoginForm = lazy(
  () => import(/* webpackChunkName: "login-form" */ './loginForm')
);
import AuthPagesLayout from '../../layout/web/authPagesLayout';

import cn from 'classnames';
import styles from './styles.module.scss';

export const getServerSideProps: GetServerSideProps<any> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en')),
  },
});

const Login = (): JSX.Element => {
  const { t } = useTranslation('common');

  const [currentForm, setCurrentForm] = useState<JSX.Element | null>(null);
  const formName = useRef('loginForm');

  const openCurrentForm = useCallback(
    (value: string) => {
      formName.current = value;
      import(`./${value}`)
        .then((module) => module.default)
        .then((element) => {
          setCurrentForm(createElement(element));
        });
    },
    [formName]
  );

  return (
    <div className="col-lg-12 col-md-12  mtb_20">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className="panel-login panel">
            <div className="panel-heading">
              <div className="row mb_20">
                <div
                  className={cn('col-xs-6', {
                    [styles.active]: formName?.current === 'loginForm',
                  })}
                  onClick={() => openCurrentForm('loginForm')}
                >
                  <span className={styles.item}>Login</span>
                </div>
                <div
                  onClick={() => openCurrentForm('registerForm')}
                  className={cn('col-xs-6', {
                    [styles.active]: formName?.current === 'registerForm',
                  })}
                >
                  <span className={styles.item}>{t('REGISTER.NAME')}</span>
                </div>
              </div>
              <hr />
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-12">
                  <Suspense fallback={<div>Loading...</div>}>
                    {currentForm ?? <LoginForm />}
                  </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthPagesLayout title="Login">{page}</AuthPagesLayout>;
};

export default Login;
