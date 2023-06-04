import Link from 'next/link';
import { lazy } from 'react';

const LanguageSwitcher = lazy(
  () => import(/* webpackChunkName: "language-switcher" */ './LanguageSwitcher')
);

export const TopHeader = (): JSX.Element => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="header-top-left">
              <div className="contact" />
            </div>
          </div>
          <div className="col-xs-12 col-sm-8">
            <ul className="header-top-right text-right">
              <li className="account">
                <Link href="/login">Login</Link>
              </li>
              <LanguageSwitcher />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
