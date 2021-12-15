import React, { useRef, useEffect } from 'react';
import Constants from '../../config/constants';
import Question from './Question';
import Reply from './Reply';

const { MSG_TYPE } = Constants;

const AlwaysScrollToBottom = () => {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView({ behavior: 'smooth' }));

  return <div ref={elementRef} />;
};

const Messages = ({ msgs, submitted }) => {
  if (!submitted) {
    return (
      <div className='mt-16 px-10 md:overflow-y-auto h-72 md:h-72'>
        <p className='flex justify-center  font-bold text-xl text-gray-600'>
          You can ask your queries here!
        </p>
      </div>
    );
  }

  const showWait = msgs[msgs.length - 1].type === MSG_TYPE.QUESTION;
  return (
    <ul className='mt-16 px-4 md:px-10 md:overflow-y-auto h-72 md:h-72 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-100'>
      {msgs.map(({ msg, type, uuid }) => {
        return (
          <li key={uuid} className=' flex flex-col py-3 gap-2'>
            {type === MSG_TYPE.QUESTION ? (
              <Question msg={msg} />
            ) : (
              <Reply msg={msg} />
            )}
          </li>
        );
      })}
      {showWait ? (
        <Reply msg={<span className='animate-pulse'>Wait...</span>} />
      ) : null}
      <AlwaysScrollToBottom />
    </ul>
  );
};

export default Messages;
