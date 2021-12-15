import React from 'react'
import Chat from './Chat'
import ChatBotTitle from './ChatBotTitle'

const Chatbot = () => {
    return (
        <div className='col-span-2 md:col-span-1'>
            <ChatBotTitle />
            <Chat />
        </div>
    )
}

export default Chatbot
