'use client'
import { usePathname} from "next/navigation"
import {  Button } from '@chakra-ui/react';
import Link from "next/link";

const LeftBar = () => {
    const pathname = usePathname();
  return (
    <>
    {(pathname === "/backend" || pathname.startsWith("/backend/booking")) &&(
         <>
                  <Button>
                     <Link href='/backend/booking/1'>預約一</Link>
                  </Button>
                  <Button>
                      <Link href='/backend/booking/2'>預約二</Link>
                  </Button>
                 
    </>)}
    {( pathname.startsWith("/backend/UI")) && (
        <>
            <Button>
              <Link href='/backend/UI/1'>管理一</Link>
            </Button>
            <Button>
                <Link href='/backend/UI/2'>管理二</Link>
            </Button>
       </>
    )} 
    </>
  )
}

export default LeftBar