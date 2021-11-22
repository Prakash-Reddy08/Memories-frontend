import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/UserContext';
import { PostsProvider } from './context/PostsContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

