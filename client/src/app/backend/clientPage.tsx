'use client'
import { Button, Stack,Flex,Box,Text} from '@chakra-ui/react';
import { useState } from 'react';

interface MenuButtonsProps {
  menuData: Record<string, string[]>;
  contentData: Record<string, string>;
}

const MenuButtons = ({ menuData, contentData }: MenuButtonsProps) => {
  const [currentMenu, setCurrentMenu] = useState('Menu1');
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  return (
    <Flex flex="1">
      <Stack
        bg="gray.100"
        width="20%"
        padding="4"
        align="stretch"
      >
        {menuData[currentMenu].map((item) => (
          <Button
            key={item}
            variant={currentItem === item ? 'solid' : 'outline'}
            onClick={() => setCurrentItem(item)}
          >
            {item}
          </Button>
        ))}
      </Stack>
      <Box flex="1" padding="6" bg="white">
        <Text fontSize="xl" fontWeight="bold">
          {currentItem ? contentData[currentItem] : 'Please select an option'}
        </Text>
      </Box>
    </Flex>
  );
};

export default MenuButtons;
