import { Spinner, Flex, ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router } from 'react-router-dom';

import { NotificationHook } from '@/hooks/notificationsHook';
import AuthProvider from '@/lib/auth';
import { AxiosInterceptor } from '@/lib/axios';
import { queryClient } from '@/lib/react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider>
      <React.Suspense
        fallback={(
          <Flex alignItems="center" justifyContent="center">
            <Spinner size="xl" />
          </Flex>
                  )}
      >
        <Router>
          <QueryClientProvider client={queryClient}>
            {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
            <NotificationHook />
            <AuthProvider>
              <AxiosInterceptor>

                {children}
              </AxiosInterceptor>
            </AuthProvider>
          </QueryClientProvider>
        </Router>
      </React.Suspense>
    </ChakraProvider>
  );
}
