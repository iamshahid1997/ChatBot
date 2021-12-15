import React, { useState } from 'react';
import { GenerateUUID4 } from '../../libs/utils';
import { GetReplyFromQuestionMock } from '../../libs/mock_reqs';
import Messages from './Messages';
import Constants from '../../config/constants';

const { MSG_TYPE } = Constants;

const MESSAGE_SCHEMA = (msg, type, uuid = GenerateUUID4()) => ({
  msg,
  type,
  uuid,
});

const Chat = () => {
  const [question, setQuestion] = useState('');
  const [msgs, setMsgs] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const _submitQuestion = (event) => {
    event.preventDefault();
    if(question.length === 0) {
      
    }
    setSubmitted(true);
    const msg = MESSAGE_SCHEMA(question, MSG_TYPE.QUESTION);
    setMsgs((prev) => [...prev, msg]);
    _getReplyReq(msg.msg);
    setQuestion('');
  };

  const _getReplyReq = async (ques) => {
    const res = await GetReplyFromQuestionMock(ques);

    setMsgs((prev) => [
      ...prev,
      MESSAGE_SCHEMA(res.data.reply, MSG_TYPE.REPLY),
    ]);
  };

  return (
    <div className='shadow-xl mx-6 md:mx-14 h-96 md:h-2/3 rounded-3xl relative'>
      <Messages msgs={msgs} submitted={submitted} />
      <div className='flex absolute bottom-0 px-3 md:px-6 pb-10 w-full items-center bg-white'>
        <form
          onSubmit={_submitQuestion}
          className='flex w-full space-x-4 items-center'
        >
          <p className='text-red-500 font-bold text-xl col-span-2 flex justify-center'>
            Ask
          </p>
          <input
            className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder='Ask your Question'
            type='text'
            required
          />
          <button
            type='submit'
            className='px-4 py-1 bg-red-500 text-gray-50 rounded hover:bg-red-300'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
