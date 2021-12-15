import React from 'react';

const Reply = ({ msg }) => (
  <div className='flex space-x-2'>
    <p className='w-full border px-4 py-1 rounded-3xl text-sm text-gray-500 bg-gray-50'>
      {msg}
    </p>
    <img
      src='./user.jpg'
      alt='user'
      className='h-8 w-8 rounded-full object-cover'
    />
  </div>
);

export default Reply;
