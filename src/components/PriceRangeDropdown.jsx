import React, { useContext, useState } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

function PriceRangeDropdown() {
  const {price, setPrice} = useContext(HouseContext);

  const [isOpen, setisOpen] = useState(false);

  const prices = [
        {
          value: 'Price range (any)'
        },
        {
          value: '10000$ - 30000$'
        },
        {
          value: '30000$ - 40000$'
        },
        {
          value: '100000$ - 130000$'
        },
        {
          value: '130000$ - 160000$'
        },
        {
          value: '160000$ - 190000$'
        },
        {
          value: '190000$ - 220000$'
        }
  ];

  return (
    <Menu as='div' className='drowdown relative'>
      <Menu.Button onClick={() => setisOpen(!isOpen)} 
      className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose price range</div>
        </div>
          {
            isOpen ? (
              <RiArrowDownSLine className='dropdown-icon-secondary' />
              ) : (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
              )
          }
      </Menu.Button>

      <Menu.Items className='dropdown-menu'
      >
        {prices.map((item, i) => {
          return (
            <Menu.Item onClick={(() => {setPrice(item.value)})}
            className='cursor-pointer hover:text-violet-700 transition' as='li' key={i}>
                {item.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropdown
