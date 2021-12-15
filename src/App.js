import React from 'react';
import Chatbot from './components/chatbot/Chatbot';
import Logo from './components/logo/Logo';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div>
      <Topbar />
      <div className='grid grid-cols-2'>
        <Logo />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
