import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import DatePicker from './DatePicker';
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
} from '@heroicons/react/solid';

const Header = ({placeholder}) => {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();
  const handleClear = () => setSearchInput('');
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md grid grid-cols-2 sm:grid-cols-3 p-5 md:px-10">
      {/* left - logo */}
      <div
        className="flex relative h-10 cursor-pointer items-center my-auto order-1"
        onClick={() => router.push('/')}
      >
        <Image
          src="/logo.png"
          alt="buisness logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle - search */}
      <div className="flex flex-grow items-center border-2 shadow-sm py-2 rounded-full order-3 sm:order-2 col-span-2 sm:col-span-1 mx-auto sm:mx-0">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="flex-grow outline-none bg-transparent pl-5 text-sm capitalize text-gray-600 placeholder-gray-400"
          placeholder={placeholder || `Start your search...`}
        />
        <SearchIcon className="hidden text-white bg-red-400 rounded-full p-2 h-8 cursor-pointer md:inline-flex md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500 order-2 sm:order-3">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer hidden sm:inline-flex" />
        <div className="flex items-center p-2 rounded-full border-2 space-x-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <DatePicker searchInput={searchInput} onClear={handleClear} />
      )}
    </header>
  );
};

export default Header;
