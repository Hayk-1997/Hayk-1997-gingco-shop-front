import { memo, useState } from 'react';
import Link from 'next/link';
import cn from 'classnames';

const NavigationItems = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li
          className={cn({
            'nav-item': !open,
            'nav-item menu-is-opening menu-open': open,
          })}
          role="presentation"
          onClick={() => setOpen(!open)}
        >
          <a href="#" className="nav-link">
            <i className="nav-icon far fa-envelope" />
            <p>
              Category
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link href="list" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>List</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="create" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Create</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default memo(NavigationItems);
