import React from 'react';
import img from '../assets/img/house-banner.jpg';
import Search from '../components/Search';

function Banner() {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>

      <div className='flex flex-col lg:flex-row '>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4x1 lg:text-[58px] font-semibold leading-none mb-6'><span className='text-violet-700'>Rent</span> Your dream house with us</h1>
          <p className='max-x-[480px] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur earum architecto odio tempore. Aliquam, voluptates! Iure doloribus, inventore sequi quisquam laborum illo eveniet architecto incidunt.</p>
        </div>

        <div className='hidden flex-1 lg:flex justify-end items-end '>
        <img className="rounded-tl-[200px]" src={img} alt="img" />
        </div>
      </div>

      <Search/>
      
    </section>
  )
}

export default Banner