import { useRoutes } from 'react-router-dom';
import publicRoutes from '@/routes/publicRoutes';
import protectedRoutes from '@/routes/privateRoutes';

export default function AppRoutes() {
  // const isAuthenticated = useIsAuthenticated();
  // const routes = isAuthenticated() ? protectedRoutes : publicRoutes;
  const routes = [...publicRoutes, ...protectedRoutes];
  const element = useRoutes([...routes]);

  return <>{element}</>;
}
