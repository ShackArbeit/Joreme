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
       <div>
            據了解，黃麟凱到16日傍晚5點半才被通知要遭槍決，得知時有點錯愕，行刑前的4個半小時，他一句話都沒多說；上刑場後，最後一餐吃了將近1小時
            ，一隻雞腿只咬了一點點，高粱酒啜了一小口，抽了一支菸，留下遺言給親人。
       </div>
  )
}

export default BackendHomePage