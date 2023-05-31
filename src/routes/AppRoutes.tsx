import { useRoutes } from 'react-router-dom';
import { useIsAuthenticated } from 'react-auth-kit';
import publicRoutes from '@/routes/publicRoutes';
import protectedRoutes from '@/routes/privateRoutes';

export default function AppRoutes() {
  const isAuthenticated = useIsAuthenticated();
  const routes = isAuthenticated() ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes]);

  return <>{element}</>;
}
