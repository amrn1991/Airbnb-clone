import React from 'react';
import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const InfoCard = ({
  img,
  title,
  price,
  location,
  description,
  star,
  total,
}) => {
  return (
    <div className="flex flex-col sm:flex-row py-7 px-2 pr-4 border-b cursor-pointer hover:shadow-lg hover:opacity-80 first:border-t">
      <div className="relative h-32 w-60 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} alt={title} layout="fill" objectFit="cover" className='rounded-2xl' />
      </div>

      <div className="flex flex-col flex-grow mt-4 sm:pl-5 sm:mt-0">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="w-10 pt-2 border-b"></div>
        <p className="text-sm text-gray-600 pt-2 flex-grow">{description}</p>
        <div className='flex justify-between items-end pt-5'>
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" /> {star}
          </p>
          <div>
              <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
              <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
