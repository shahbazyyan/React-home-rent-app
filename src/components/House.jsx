import React from 'react';
import {BiBed, BiBath, BiArea} from 'react-icons/bi'

function House({house}) {
  const {image, type, country, address, bedrooms, bathrooms, surface, price} = house
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[325px] mx-auto cursor-pointer hover:shadow-2xl transition' >
      <img src={image} alt="house" />
      <div>
          <div>{type}</div>
          <div>{country}</div>
      </div>
    </div>
  )
}

export default House