'use client'
import { usePathname } from "next/navigation"
import {Box} from "@chakra-ui/react";
import UI1 from "../components/UI1"
import UI2 from "../components/UI2"

const UIPage = () => {
    const pathname=usePathname()
  return (
    <>
     {pathname==='/backend/UI/1' && <UI1/>}
     {pathname==='/backend/UI/2' && <UI2/>}
     </>
  )
}

export default UIPage