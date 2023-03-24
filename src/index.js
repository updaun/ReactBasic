import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CoinTracker from './CoinTracker';
import MovieApp from './MovieApp';
import First from './First';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CoinTracker /> */}
    {/* <MovieApp /> */}
    <First />
  </React.StrictMode>
);
