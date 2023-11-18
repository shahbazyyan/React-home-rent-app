import React, { useContext, useState } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

function PropertyDropdown() {
  const {property, setProperty, properties} = useContext(HouseContext);

  const [isOpen, setisOpen] = useState(false);

  return (
    <Menu as='div' className='drowdown relative'>
      <Menu.Button onClick={() => setisOpen(!isOpen)} 
      className='dropdown-btn w-full text-left'>
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div  className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select Your Place</div>
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
        {properties.map((item, i) => {
          return (
            <Menu.Item onClick={(() => {setProperty(item)})}
            className='cursor-pointer hover:text-violet-700 transition' as='li' key={i}>
                {item}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown
