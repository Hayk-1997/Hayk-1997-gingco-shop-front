import React from 'react';
import Head from 'next/head';
import { Header } from '../../features/header';
import { Footer } from '../../features/footer';
import Script from 'next/script';

interface ILayout {
  title: string;
  children: React.ReactElement;
}

export default function MainLayout({ children, title }: ILayout): JSX.Element {
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
      <Header />
      <main>{children}</main>
      <Footer />
      <Script src="/assets/scripts/jQuery_v3.1.1.min.js" />
      <Script src="/assets/scripts/owl.carousel.min.js" />
      <Script src="/assets/scripts/bootstrap.min.js" />
      <Script src="/assets/scripts/jquery.magnific-popup.js" />
      {/*@TODO need to resolve later*/}
      <Script src="/assets/scripts/jquery.firstVisitPopup.js" />
      <Script src="/assets/scripts/custom.js" />
      <script
        src="https://kit.fontawesome.com/356891cc24.js"
        crossOrigin="anonymous"
      />
      {/*<link rel="stylesheet" href="owl-carousel/owl.carousel.css" />*/}
      {/*<link rel="stylesheet" href="owl-carousel/owl.theme.css" />*/}
      {/*<script src="owl-carousel/owl.carousel.js"></script>*/}
    </>
  );
}
