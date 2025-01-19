import { Box,Button } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/UI/color-mode"
import Link from "next/link";

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
                <Link href='/backend/UI' >分頁管理</Link>
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
                <Link href='/backend/booking' >預約管理</Link>
          </Button>  
        </Box>
  )
}

export default Head