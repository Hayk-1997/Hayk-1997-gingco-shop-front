import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import cn from 'classnames';
import styles from '../../pages/login/styles.module.scss';

interface ILayout {
  title: string;
  children: React.ReactElement;
}
export default function AuthPagesLayout({
  children,
  title,
}: ILayout): JSX.Element {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/styles/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/styles/bootstrap.css"
      />
      <link rel="stylesheet" type="text/css" href="/assets/styles/style.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/styles/magnific-popup.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/styles/owl.carousel.css"
      />
      <main>
        <div className="col-lg-12 col-md-12  mtb_20">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel-login panel">
                <div className="panel-heading">
                  <div className="row mb_20">
                    <div
                      className={cn('col-xs-6', {
                        [styles.active]: router.pathname.search('/login') > -1,
                      })}
                      onClick={() => router.push('login')}
                      role="presentation"
                    >
                      <span className={styles.item}>Login</span>
                    </div>
                    <div
                      onClick={() => router.push('register')}
                      className={cn('col-xs-6', {
                        [styles.active]:
                          router.pathname.search('/register') > -1,
                      })}
                      role="presentation"
                    >
                      <span className={styles.item}>{t('REGISTER.NAME')}</span>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
