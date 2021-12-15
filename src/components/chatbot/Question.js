import React from 'react';

const Question = ({ msg }) => (
  <div className='flex space-x-2'>
    <img
      src='./user.jpg'
      alt='user'
      className='h-8 w-8 rounded-full object-cover'
    />
    <p className='w-full border px-4 py-1 rounded-3xl text-sm text-gray-50 bg-red-500'>
      {msg}
    </p>
  </div>
);

export default Question;
