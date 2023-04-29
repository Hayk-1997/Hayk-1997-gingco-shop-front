import { memo } from 'react';
import Items from './Items';

const NavigationItems = (): JSX.Element => {
  return (
    <nav className="mt-2">
      <ul
        className="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <Items />
      </ul>
    </nav>
  );
};

export default memo(NavigationItems);
