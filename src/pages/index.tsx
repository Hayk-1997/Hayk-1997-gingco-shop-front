import { ReactElement } from 'react';
import MainLayout from '../layout/mainLayout';
import { Banner } from '../features/banner';
import { Container } from '../features/container';

export default function IndexPage (): JSX.Element {
    return (
        <>
            <Banner />
            <Container />
        </>
    )
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout title="Home">
            {page}
        </MainLayout>
    )
}

