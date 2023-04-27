import { useAuth } from '../../hooks/web/useAuth';
import React from 'react';

interface ILayout {
  title: string;
  children: React.ReactElement;
}

const AuthorizedLayout = ({ title, children }: ILayout): JSX.Element => {
  const { user } = useAuth({ middleware: 'auth' });

  console.log('user', user);
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {title}
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AuthorizedLayout;
