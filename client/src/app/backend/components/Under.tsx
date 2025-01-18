"use client";
import { VStack, Box, Button, Text } from "@chakra-ui/react";
import { Dispatch,SetStateAction } from "react";
import Component1 from "./component1";
import Component2 from "./component2";

// interface UnderProps {
//   menuData: { [key: string]: string[] };
//   currentMenu: string;
//   setCurrentItem: Dispatch<SetStateAction<string | null>>;
//   currentItem: string | null;
// }

const Under = () => {
 

  return (
    <>
      <VStack bg="gray.100" width="20%" padding="4" align="stretch">    
          <Button
          >
            測試
          </Button>
     
      </VStack>

      <Box flex="1" padding="6" bg="white">
         <Text>
          jjj 
         </Text>
      </Box>
    </>
  );
};

export default Under;
