import React from 'react';

interface ILayout {
  children: React.ReactElement;
}

export default function LoginPageLayout({ children }: ILayout): JSX.Element {
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
      <link rel="stylesheet" href="/assets/admin/dist/css/adminlte.min.css" />
      <main>
        <div className="hold-transition login-page">{children}</div>
      </main>
    </>
  );
}
