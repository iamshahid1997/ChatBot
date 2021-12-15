import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from 'react-icons/ai';

const Topbar = () => {
  return (
    <div className='px-6 md:px-10 border-b border-red-400 flex justify-between items-center'>
      <div className='flex items-center'>
        <img
          src='./logo.png'
          alt='logo'
          className='h-12 md:h-14 py-2 object-cover'
        />
        <p className='text-xl font-bold text-red-500'>ChatBot</p>
      </div>

      <div className='flex space-x-2 text-2xl text-red-500 ml-3'>
        <a
          href='https://www.facebook.com/profile.php?id=100005654111460'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillFacebook className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
        </a>
        <a
          href='https://twitter.com/iamshahid1997'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillTwitterSquare className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
        </a>
        <a
          href='https://www.linkedin.com/in/shahid-hassan-ansari-b19379149/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
