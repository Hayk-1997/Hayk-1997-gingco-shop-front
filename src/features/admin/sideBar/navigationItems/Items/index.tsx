import { useCallback, useState, memo } from 'react';
import Link from 'next/link';
import { AdminNavigation } from '../../../../../constants/adminNavigation';
import cn from 'classnames';

const Items = (): JSX.Element => {
  const [menu, openMenu] = useState<string>('');

  const handleOpenMenu = useCallback(
    (value: string): void => {
      menu === value ? openMenu('') : openMenu(value);
    },
    [menu]
  );

  return (
    <>
      {AdminNavigation.map((navigation, index) => (
        <li
          key={index}
          className={cn({
            'nav-item': menu !== navigation.name,
            'nav-item menu-is-opening menu-open': menu === navigation.name,
          })}
          role="presentation"
          onClick={() => handleOpenMenu(navigation.name)}
        >
          <div className="nav-link">
            <i className="nav-icon far fa-envelope" />
            <p>
              {navigation.name}
              <i className="fas fa-angle-left right" />
            </p>
          </div>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link href={navigation.list} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>List</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={navigation.create} className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Create</p>
              </Link>
            </li>
          </ul>
        </li>
      ))}
    </>
  );
};

export default memo(Items);
