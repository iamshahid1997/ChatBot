import React from 'react';

const Logo = () => {
  return (
    <div className='justify-center my-20 hidden md:flex'>
      <img
        src='./service2.png'
        alt='pageLogo'
        className='w-2/3 object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
      />
    </div>
  );
};

export default Logo;
