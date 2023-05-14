import React, { useEffect } from 'react';
import { useAdminAuth } from '../../hooks/admin/useAdminAuth';
import SideBar from '../../features/admin/sideBar';
import Header from '../../features/admin/header';

interface ILayout {
  children: React.ReactElement;
  className?: string;
}
const AuthorizedAdminLayout = ({
  children,
  className,
}: ILayout): JSX.Element => {
  const { user } = useAdminAuth({ middleware: 'auth' });

  useEffect(() => {
    if (className) {
      document.body.classList.add('hold-transition');
      document.body.classList.add(className);
    }
  }, [className]);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/admin/fontawesome-free/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="/assets/admin/icheck-bootstrap/icheck-bootstrap.min.css"
      />
      <link rel="stylesheet" href="/assets/admin/dist/css/adminlte.css" />

      <link rel="stylesheet" href="/assets/admin/jsgrid/jsgrid.min.css" />
      <link rel="stylesheet" href="/assets/admin/jsgrid/jsgrid-theme.min.css" />

      <main>
        <div className="wrapper">
          {user && (
            <>
              <Header />
              <SideBar />
              {children}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default AuthorizedAdminLayout;
