import React from 'react';
import Head from 'next/head';

interface ILayout {
  title: string;
  children: React.ReactElement;
}
export default function AuthLayout({ children, title }: ILayout) {
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
      <main>{children}</main>
    </>
  );
}
