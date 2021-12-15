import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Topbar = () => {
  return (
    <div className='px-6 md:px-10 border-b border-red-400 flex justify-between items-center'>
      <img src='./logo.png' alt='logo' className='h-12 md:h-14 py-2 object-cover' />
      <div className='flex space-x-2 text-2xl text-red-500 '>
        <a
          href='https://www.facebook.com/CT2serve/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillFacebook className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
        </a>
        <a
          href='https://twitter.com/ClaimTherapist'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillTwitterSquare className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
        </a>
        <a
          href='https://www.linkedin.com/company/claimtherapist/about/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillLinkedin className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
        </a>
        <a
          href='https://www.instagram.com/claimtherapist/?igshid=ghbbxxp0v6k3'
          target='_blank'
          rel='noreferrer'
        >
          <AiOutlineInstagram className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105' />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
