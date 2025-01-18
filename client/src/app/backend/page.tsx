'use client'
import { Flex} from '@chakra-ui/react';
import {useState} from 'react'
// Head 負責標頭部分、Under 負責下方顯示部分
import Head from './components/Head';
import Under from './components/Under';

const BackendHomePage = () => {
  const [currentMenu, setCurrentMenu] = useState<string>('各分頁管理'); 
  const [currentItem, setCurrentItem] = useState<string|null>(null);   
  const menuData= {
    各分頁管理: ['分頁1', '分頁2', '分頁3'],
    預約管理: ['管理1', '管理2', '管理3'],
  };
  // const contentData = {
  //   'Option1': 'Content for Option 1',
  //   'Option2': 'Content for Option 2',
  //   'Option3': 'Content for Option 3',
  //   'OptionA': 'Content for Option A',
  //   'OptionB': 'Content for Option B',
  //   'OptionC': 'Content for Option C',
  // };
  return (
    <Flex direction="column" height="100vh">
      <Head 
         menuData={menuData}
         setCurrentMenu={setCurrentMenu}
         setCurrentItem={setCurrentItem}
      />
    <Flex flex="1">
      <Under
        menuData={menuData}
        currentMenu={currentMenu}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      
      />
    </Flex>
  </Flex>
  )
}

export default BackendHomePage