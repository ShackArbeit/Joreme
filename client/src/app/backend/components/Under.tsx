"use client";
import { VStack, Box, Button, Text } from "@chakra-ui/react";
import { Dispatch,SetStateAction } from "react";
import Component1 from "./component1";
import Component2 from "./component2";

interface UnderProps {
  menuData: { [key: string]: string[] };
  currentMenu: string;
  setCurrentItem: Dispatch<SetStateAction<string | null>>;
  currentItem: string | null;
}

const Under = ({
  menuData,
  currentMenu,
  setCurrentItem,
  currentItem,
}: UnderProps) => {
 
  const handleButtonClick = (item: string) => {
    setCurrentItem(item);
 
  };

  return (
    <>
      <VStack bg="gray.100" width="20%" padding="4" align="stretch">
        {menuData[currentMenu].map((item: string) => (
          <Button
            key={item}
            variant={currentItem === item ? "solid" : "outline"}
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </Button>
        ))}
      </VStack>

      <Box flex="1" padding="6" bg="white">
      {currentItem === "分頁1" && <Component1 />}
            {currentItem === "分頁2" && <Component2 />}
             {!currentItem && (
          <Text fontSize="xl" fontWeight="bold">
                Please select an option
          </Text>
          )}
      </Box>
    </>
  );
};

export default Under;
