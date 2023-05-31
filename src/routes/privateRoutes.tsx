import React, { Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';

function App() {
  return (
    <MainLayout>
      <Suspense
        fallback={(
          <Spinner />
                )}
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

export default [
  {
    path: '/app',
    element: <App />,
    children: [
      // { path: 'feature1/*', element: <Feature1Routes /> },
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
