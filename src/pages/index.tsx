import { ReactElement } from 'react';
import MainLayout from '../layout/web/mainLayout';
// import { Banner } from '../features/banner';
// import { Container } from '../features/container';
// import { Footer } from '../features/footer';
import Shop from './shop';

export default function IndexPage(): JSX.Element {
  return <Shop />;
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Home">{page}</MainLayout>;
};
