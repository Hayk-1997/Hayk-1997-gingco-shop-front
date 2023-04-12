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
            <script src="/assets/scripts/jQuery_v3.1.1.min.js" lang="JavaScript"/>
            <script src="/assets/scripts/bootstrap.min.js" lang="JavaScript"/>
            {/*@TODO need to resolve later*/}
            {/*<script src="/assets/scripts/owl.carousel.min.js" lang="JavaScript"/>*/}
            {/*<script src="/assets/scripts/jquery.magnific-popup.js" lang="JavaScript"/>*/}
            {/*<script src="/assets/scripts/jquery.firstVisitPopup.js" lang="JavaScript"/>*/}
            {/*<script src="/assets/scripts/custom.js" lang="JavaScript"/>*/}
        </>
    )
}