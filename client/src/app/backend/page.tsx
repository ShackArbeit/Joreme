'use client'
import { Box, Flex, VStack, Button, Text,Stack} from '@chakra-ui/react';

import { ColorModeButton } from "@/components/UI/color-mode"
import {useState} from 'react'



const BackendHomePage = () => {
  const [currentMenu, setCurrentMenu] = useState('各分頁管理'); // C 部分選項
  const [currentItem, setCurrentItem] = useState(null);   // A 部分選項
  

  

   interface Menu{
         [key:string]:string[];
   }
  const menuData:Menu = {
    各分頁管理: ['Option 1', 'Option 2', 'Option 3'],
    預約管理: ['Option A', 'Option B', 'Option C'],
  };

  const contentData = {
    'Option 1': 'Content for Option 1',
    'Option 2': 'Content for Option 2',
    'Option 3': 'Content for Option 3',
    'Option A': 'Content for Option A',
    'Option B': 'Content for Option B',
    'Option C': 'Content for Option C',
  };
  return (
    <Flex direction="column" height="100vh">
    {/* C 部分 - 頂部導航 */}
    <Box 
    bg={{ base: "blue.500", _dark: "black" }}
    color="white" 
    padding="4" 
    display="flex" 
    justifyContent="space-around">
       <ColorModeButton />
      {Object.keys(menuData).map((menu) => (
        <Button
          size='lg'
          bg={{ base: "black", _dark: "white" }}
          padding='2'
          color={{ base: "white", _dark: "black" }}
          borderWidth="3px"
          borderColor={{ base: "white", _dark: "black" }}
          key={menu}
          variant="solid"
          onClick={() => {
            setCurrentMenu(menu);
            setCurrentItem(null); // 重置 A 部分選擇
          }}
        >
          {menu}
        </Button>
      ))}
    </Box>
    <Flex flex="1">
      <VStack
        bg="gray.100"
        width="20%"
        padding="4"
        align="stretch"
      >
        {menuData[currentMenu].map((item:any) => (
          <Button
            key={item}
            variant={currentItem === item ? 'solid' : 'outline'}
            onClick={() => setCurrentItem(item)}
          >
            {item}
          </Button>
        ))}
      </VStack>

      <Box flex="1" padding="6" bg="white">
        <Text fontSize="xl" fontWeight="bold">
          {currentItem ? contentData[currentItem] : 'Please select an option'}
        </Text>
      </Box>
    </Flex>
  </Flex>
  )
}

export default BackendHomePage