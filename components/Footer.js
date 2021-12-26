import React from 'react';

const Footer = () => {
  return (
    <div className='grid grid-cols-2 px-10 sm:px-24 py-14 sm:grid-cols-2 md:grid-cols-4 gap-y-10 bg-gray-100 text-gray-600'>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Disaster relief housing</p>
        <p>Support refugees</p>
        <p>Celebrating diversity</p>
        <p>Combating discrimination</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p>Try Hosting</p>
        <p>AirCover protection</p>
        <p>Explore hosting resources</p>
        <p>Visit our forum</p>
        <p>How to host responsibly</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help center</p>
        <p>Safety information</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 response</p>
        <p>Report neighborhood concern</p>
      </div>
    </div>
  );
};

export default Footer;
