

import { Flex, VStack, Box } from '@chakra-ui/react';

import Head from './Head';
import LeftBar from './LeftBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Flex direction="column" height="100vh">
      <Head />
      <Flex flex="1">
        <VStack bg="gray.100" width="20%" padding="4" align="stretch">
           <LeftBar/>
        </VStack>
        <Box flex="1" padding="6" bg="white">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
