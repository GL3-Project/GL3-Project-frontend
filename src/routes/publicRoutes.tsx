import { LoginPage } from '@/features/auth/pages/Login';
import { AuthRoutes } from '@/features/auth/routes';
// import LandingPage from '@/features/landingPage/components/LandingPage';

export default [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
  {
    path: '/app/*',
    element: <LoginPage />,
    exact: true,
  },
  // {
  //   path: '/',
  //   element: <LandingPage />,
  //   exact: true,
  // },

];
