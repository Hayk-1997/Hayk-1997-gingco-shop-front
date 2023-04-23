import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export const TopHeader = (): JSX.Element => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="header-top-left">
              <div className="contact">
                <span className="hidden-xs hidden-sm hidden-md">
                  Days a week from 9:00 am to 7:00 pm
                </span>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8">
            <ul className="header-top-right text-right">
              <li className="account">
                <Link href="/login">Login</Link>
                {/*<a href="https://html.lionode.com/darklook/login.html">*/}
                {/*    */}
                {/*</a>*/}
              </li>
              <LanguageSwitcher />
              <li className="currency dropdown">
                <span
                  className="dropdown-toggle"
                  id="dropdownMenu12"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  role="button"
                >
                  Currency
                  <span className="caret"></span>
                </span>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu12">
                  <li>
                    <a href="https://html.lionode.com/darklook/#">€ Euro</a>
                  </li>
                  <li>
                    <a href="https://html.lionode.com/darklook/#">
                      £ Pound Sterling
                    </a>
                  </li>
                  <li>
                    <a href="https://html.lionode.com/darklook/#">
                      $ US Dollar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
