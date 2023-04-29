import { ReactElement } from 'react';
import AuthorizedAdminLayout from '../../layout/admin/authorizedAdminLayout';

const Dashboard = (): JSX.Element => {
  return (
    <div className="content-wrapper" style={{ minHeight: '1302.12px' }}>
      Dashboard !
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthorizedAdminLayout className={'asd'}>{page}</AuthorizedAdminLayout>
  );
};

export default Dashboard;
