import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ChatData from './context/ChatData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatData>
      <App />
    </ChatData>
  </React.StrictMode>
);


