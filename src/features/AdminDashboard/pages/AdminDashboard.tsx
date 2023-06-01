// Chakra imports
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import Sidebar from '@/components/sidebar/Sidebar';
import routes from '@/features/AdminDashboard/routes/routes';
import AdminDashboardRoutes from '@/features/AdminDashboard/routes/index';

// Custom Chakra theme
export default function AdminDashboard(props: { [x: string]: any }) {
  const { ...rest } = props;
  // states and functions
  const [fixed] = useState(false);
  // functions for changing the states from components
  const getActiveRoute = (rts: RoutesType[]): string => {
    const activeRoute = 'Default Brand Text';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rts.length; i++) {
      if (window.location.href.indexOf(rts[i].layout + rts[i].path) !== -1) {
        return rts[i].name;
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (rts: RoutesType[]): boolean => {
    const activeNavbar = false;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rts.length; i++) {
      if (window.location.href.indexOf(rts[i].layout + rts[i].path) !== -1) {
        // @ts-ignore
        return rts[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getActiveNavbarText = (rts:RoutesType[]): string | boolean => {
    const activeNavbar = false;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < rts.length; i++) {
      if (window.location.href.indexOf(rts[i].layout + rts[i].path) !== -1) {
        return rts[i].name;
      }
    }
    return activeNavbar;
  };

  document.documentElement.dir = 'ltr';
  const { onOpen } = useDisclosure();
  return (
    <Box>
      <Sidebar routes={routes} display="none" {...rest} />
      <Box
        float="right"
        minHeight="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
        maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Portal>
          <Box>
            <Navbar
              onOpen={onOpen}
              logoText="Horizon UI Dashboard PRO"
              brandText={getActiveRoute(routes)}
              secondary={getActiveNavbar(routes)}
              message={getActiveNavbarText(routes)}
              fixed={fixed}
              {...rest}
            />
          </Box>
        </Portal>
        <Box mx="auto" p={{ base: '20px', md: '30px' }} pe="20px" minH="100vh" pt="50px">
          <AdminDashboardRoutes />
        </Box>

        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
