import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/hero.jpg" alt="banner" layout="fill" objectFit="cover"  />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-md sm:text-lg font-semibold">Not Sure Where To Go? Perfect.</p>
        <button className="bg-white text-purple-500 px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-lg active:scale-90 transition duration-200">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
};

export default Hero;
