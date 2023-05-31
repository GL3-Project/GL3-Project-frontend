import { Flex } from '@chakra-ui/react';
import Navbar from '@/features/Navigation/components/Navbar';

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <Flex flexDirection="column" width="100wh" height="100vh" bg="#F5F5F5" overflowY="scroll">
      <Navbar />
      <main>{children}</main>
    </Flex>
  );
}
