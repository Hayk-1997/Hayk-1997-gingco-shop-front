import React, { useEffect } from 'react';
import Head from 'next/head';

interface ILayout {
    title: string,
    children: React.ReactElement,
    className: string,
}

export default function AdminLayout({ children, title, className }: ILayout) {

    useEffect(() => {
        document.body.classList.add('hold-transition');
        document.body.classList.add(className);
    }, []);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
            <link rel="stylesheet" type="text/css" href="/assets/admin/fontawesome-free/css/all.min.css"/>
            <link rel="stylesheet" href="/assets/admin/icheck-bootstrap/icheck-bootstrap.min.css"/>
            <link rel="stylesheet" href="/assets/admin/dist/css/adminlte.min.css"/>
            <main>{children}</main>
        </>
    )
}