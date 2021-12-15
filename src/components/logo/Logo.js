import React from 'react';

const Logo = () => {
  return (
    <div className='justify-center my-20 hidden md:flex'>
      <img
        src='./robo_small.gif'
        alt='pageLogo'
        className='w- object-cover transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
      />
    </div>
  );
};

export default Logo;
