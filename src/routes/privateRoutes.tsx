import React, { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import AdminDashboard from '@/features/AdminDashboard/pages/AdminDashboard';

function App() {
  return (
    <Suspense
      fallback={(
        <Spinner />
                )}
    >
      <Outlet />
    </Suspense>
  );
}

export default [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: 'dashboard/*', element: <AdminDashboard /> },
    ],
  },
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to="/app/" />, exact: true },
    ],
  },
];
