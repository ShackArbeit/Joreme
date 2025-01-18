import { Box,Button } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/UI/color-mode"

const Head = () => {
  return (
     <Box 
        bg={{ base: "blue.500", _dark: "black" }}
        color="white" 
        padding="4" 
        display="flex" 
        justifyContent="space-around">
           <ColorModeButton />
          <Button
              size='lg'
              bg={{ base: "black", _dark: "white" }}
              padding='2'
              color={{ base: "white", _dark: "black" }}
              borderWidth="3px"
              borderColor={{ base: "white", _dark: "black" }}
              variant="solid"
          >
                分頁管理
          </Button>
          <Button
              size='lg'
              bg={{ base: "black", _dark: "white" }}
              padding='2'
              color={{ base: "white", _dark: "black" }}
              borderWidth="3px"
              borderColor={{ base: "white", _dark: "black" }}
              variant="solid"
          >
                預約管理
          </Button>  
        </Box>
  )
}

export default Head