import { Suspense, lazy } from 'react';
import Image from 'next/image';
import { TopHeader } from './topHeader';
import SearchInput from './searchInput';
const ShoppingCart = lazy(
  () =>
    import(/* webpackChunkName: "shopping-cart" */ '../dropDown/shoppingCart')
);

export const Header = (): JSX.Element => {
  return (
    <header id="header">
      <TopHeader />
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <SearchInput />
            </div>
            <div className="navbar-header col-xs-6 col-sm-4">
              <div className="navbar-brand">
                <Image
                  src="/assets/images/logo.png"
                  alt="image"
                  width={233}
                  height={57}
                />
              </div>
            </div>
            <Suspense fallback={<>...Loading</>}>
              <ShoppingCart />
            </Suspense>
          </div>
          <nav className="navbar">
            <p>menu</p>
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target=".js-navbar-collapse"
            >
              <span className="i-bar">
                <i className="fa fa-bars" />
              </span>
            </button>
            <div className="collapse navbar-collapse js-navbar-collapse">
              <ul id="menu" className="nav navbar-nav">
                <li>
                  <a href="https://html.lionode.com/darklook/index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://html.lionode.com/darklook/index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://html.lionode.com/darklook/index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://html.lionode.com/darklook/index.html">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
