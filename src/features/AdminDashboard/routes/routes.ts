import { MdHome } from 'react-icons/md';

// Admin Imports

const routes :RoutesType[] = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default/*',
    icon: MdHome,
  },
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: '/nft-marketplace',
  //   icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
  //   component: NFTMarketplace,
  //   secondary: true
  // },
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
  //   path: '/data-tables',
  //   component: DataTables
  // },
  // {
  //   name: 'Profile',
  //   layout: '/admin',
  //   path: '/profile',
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile
  // },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
  //   component: SignInCentered
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL
  // }
];

export default routes;
