import React from 'react';
import Image from 'next/image';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  SearchIcon,
} from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 p-5 md:px-10">
      {/* left - logo */}
      <div className="flex relative h-10 cursor-pointer items-center my-auto">
        <Image
          src="/logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle - search */}
      <div className="flex items-center md:border-2 md:shadow-sm py-2 rounded-full">
        <input
          type="text"
          className="flex-grow outline-none bg-transparent pl-5 text-sm text-gray-600 placeholder-gray-400"
          placeholder="Start your search..."
        />
        <SearchIcon className="hidden text-white bg-red-400 rounded-full p-2 h-8 cursor-pointer md:inline-flex md:mx-2" />
      </div>
      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className="flex items-center p-2 rounded-full border-2 space-x-2">
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
};

export default Header;
