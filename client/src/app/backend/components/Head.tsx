import { Box,Button } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/UI/color-mode"
import {Dispatch,SetStateAction} from 'react'

interface MenuProps{
    menuData:{ [key: string]: string[] };
    setCurrentMenu:Dispatch<SetStateAction<string>>;
    setCurrentItem: Dispatch<SetStateAction<string | null>>;
}


const Head = ({menuData,setCurrentMenu,setCurrentItem}:MenuProps) => {
  return (
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
                setCurrentItem(null); 
              }}
            >
              {menu}
            </Button>
          ))}
        </Box>
  )
}

export default Head