import React from 'react';
import Head from 'next/head';
import { Header } from '../features/header';

interface ILayout {
    title: string,
    children: React.ReactElement
}

export default function MainLayout({children, title}: ILayout) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            <main>{children}</main>
            {/*@TODO need to resolve later*/}
            {/*<Script src="/assets/scripts/jQuery_v3.1.1.min.js" />*/}
            {/*<Script src="/assets/scripts/owl.carousel.min.js" />*/}
            {/*<Script src="/assets/scripts/bootstrap.min.js" />*/}
            {/*<Script src="/assets/scripts/jquery.magnific-popup.js" />*/}
            {/*<Script src="/assets/scripts/jquery.firstVisitPopup.js" />*/}
            {/*<Script src="/assets/scripts/custom.js" />*/}
        </>
    )
}