import useSWR from 'swr';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ApiInstance from '../../services/axios';

interface IUseAuth {
  middleware: string;
  redirectIfAuthenticated?: string;
}
export const useAuth = ({ middleware, redirectIfAuthenticated }: IUseAuth) => {
  const router = useRouter();

  const {
    data: user,
    error,
    // mutate,
  } = useSWR('/auth/check-auth', () =>
    ApiInstance.get('/auth/check-auth')
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status === 401) {
          router.push('/404');
        }
      })
  );

  useEffect(() => {
    if (middleware === 'guest' && redirectIfAuthenticated && user) {
      // router.push(redirectIfAuthenticated);
    }
    if (
      window.location.pathname === '/verify-email' &&
      user?.email_verified_at
    ) {
      // router.push(redirectIfAuthenticated);
    }
    // if (middleware === 'auth' && error) logout();
  }, [user, error, middleware, redirectIfAuthenticated, router]);

  return {
    user,
  };
};
