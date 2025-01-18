'use client'; // 確保是客戶端元件

import { Flex, VStack, Box, Button } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import Head from './components/Head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // 獲取當前路徑

  // 根據路徑決定 VStack 的內容
  const renderSidebarContent = () => {
    if (pathname === '/backend/booking') {
      return (
        <>
          <Button>預約一</Button>
          <Button>預約二</Button>
          <Button>預約三</Button>
        </>
      );
    }

    if (pathname === '/backend/UI') {
      return (
        <>
          <Button>管理一</Button>
          <Button>管理二</Button>
          <Button>管理三</Button>
        </>
      );
    }

    return <Button>預設內容</Button>; // 預設內容（可選）
  };

  return (
    <Flex direction="column" height="100vh">
      <Head />
      <Flex flex="1">
        {/* Sidebar 根據路徑顯示不同內容 */}
        <VStack bg="gray.100" width="20%" padding="4" align="stretch">
          {renderSidebarContent()}
        </VStack>
        <Box flex="1" padding="6" bg="white">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
