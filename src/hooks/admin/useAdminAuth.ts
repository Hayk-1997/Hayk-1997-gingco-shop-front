import useSWR from 'swr';
import { useRouter } from 'next/router';
import ApiInstance from '../../services/axios';
import { getAdminToken } from '../../helpers/auth';

interface IUseAuth {
  middleware: string;
  redirectIfAuthenticated?: string;
}
export const useAdminAuth = ({
  middleware,
  redirectIfAuthenticated,
}: IUseAuth): any => {
  const router = useRouter();

  const {
    data: user,
    error,
    // mutate,
  } = useSWR('/auth/check-auth', () =>
    ApiInstance.get('/auth/check-auth', {
      headers: { Authorization: 'Bearer ' + getAdminToken() },
    })
      .then((res) => res.data)
      .catch((error) => {
        if (error.response.status === 401) {
          router.push('/admin/login');
        }
      })
  );

  return {
    user,
  };
};
