import React from 'react';
import { AiFillInstagram, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import logo from '../assets/img/logo.svg'


function Footer() {
  return (

    <div className="flex flex-col justify-center items-center gap-y-10">
      <hr className="w-2/3 rounded-xl h-1 bg-gray-300 border-none" />
      <div className="flex items-center gap-x-5">
        <img src={logo} alt="logo" className="w-52" />
      </div>
      <ul className="flex list-none gap-x-10 text-gray-600 text-lg cursor-pointer ">
        <li className='hover:text-violet-400'>Company</li>
        <li className='hover:text-violet-400'>Offices</li>
        <li className='hover:text-violet-400'>About</li>
        <li className='hover:text-violet-400'>Contact</li>
        <li className='hover:text-violet-400'>Products</li>
      </ul>
      <div className="flex gap-x-5">
    <div className="p-3 hover:bg-violet-700 hover:text-white transition-colors duration-300 rounded-full">
        <AiFillFacebook className="text-2xl cursor-pointer" />
    </div>
    <div className="p-3 hover:bg-violet-700 hover:text-white transition-colors duration-300 rounded-full">
        <AiFillInstagram className="text-2xl cursor-pointer" />
    </div>
    <div className="p-3 hover:bg-violet-700 hover:text-white transition-colors duration-300 rounded-full">
        <AiFillTwitterSquare className="text-2xl cursor-pointer" />
    </div>
</div>


      <div className="flex flex-col items-center gap-y-5 w-full mb-10 text-gray-700 text-lg">
        <hr className="w-4/5 rounded-xl h-1 bg-gray-300 border-none" />
        <p>Copyright @ 2024 - All Rights Reserved </p>
      </div>
    </div>

  )
}

export default Footer
